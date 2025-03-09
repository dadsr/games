import {useNavigate} from "react-router-dom";
import {Activity} from "../../models/Activity.ts";

interface activityProps {
    activity: Activity;
}

export function UserActivityCard (props: activityProps): JSX.Element {
    const navigate = useNavigate();
    const activity   = props.activity;

    const handleClick = (ActId:number) =>{
        navigate(`/activity/${ActId}`);
    }

    return(
        <div className="ActivityCard"  onClick={handleClick} >
            <div className="card-inner">
                <h2>activity: {activity.title}</h2>
                <h3>creator: {activity.creator.name}</h3>
                <h3>last updated: {activity.lastUpdated}</h3>
            </div>
        </div>
    )
}