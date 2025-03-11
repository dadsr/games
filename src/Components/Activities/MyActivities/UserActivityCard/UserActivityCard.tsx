import {useNavigate} from "react-router-dom";
import {Activity} from "../../../../models/Activity.ts";
import {JSX} from "react";

interface activityProps {
    activity: Activity;
}

export function UserActivityCard (props: activityProps): JSX.Element {
    const navigate = useNavigate();
    const activity   = props.activity;

    const handleClick = () =>{
        navigate(`/activity/${activity.id}`);
    }

    return(
        <div className="ActivityCard"  onClick={handleClick} >
            <div className="card-inner">
                <h2>activity: {activity.title}</h2>
                <h3>game type: {activity.gameType}</h3>
                <h3>creator: {activity.creator.name}</h3>
                <h3>last updated: {activity.lastUpdated}</h3>
            </div>
        </div>
    )
}