import {Activity} from "../../../models/Activity.ts";
import {useLocation} from "react-router-dom";
import {useState} from "react";

interface LocationState {
    state: {
        activity: Activity;
    };
}
export function EditMemoryActivity(): React.JSX.Element {
    const location = useLocation() as LocationState;
    const {activity} = location.state;
    const [editedActivity,setActivity] = useState<Activity>();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setActivity((prevActivity) =>({
            ...prevActivity,
            [name]: value,
            lastUpdated: new Date().toLocaleString(),
        }));
        activity = editedActivity;
    };

    return (
        <div className="edit-content">
            <label className="activity-title">Activity Title:</label>
            <input
                type="text"
                name="title"
                value={activity.title}
                onChange={handleChange}
                required
            />
            <span className = "last-modified">${activity.lastUpdated}</span>
        </div>
    );
}
