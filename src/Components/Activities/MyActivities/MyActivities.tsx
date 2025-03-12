import "./MyActivities.css";
import {JSX, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Activity} from "../../../models/Activity.ts";
import activityServices from "../../../services/ActivityServices.ts";

import {UserActivityCard} from "./UserActivityCard/UserActivityCard.tsx";


export function MyActivities(): JSX.Element {
    const [isLoading,setIsLoading] = useState<boolean>(true);

    const params = useParams();
    const userId = Number(params.id);

    const [userActivities, setUserActivities] = useState<Activity[]>([]);


    useEffect(() => {
        setIsLoading(true);
        activityServices
            .getActivities(userId)
            .then((fetchedActivities: Activity[]) => {
                setUserActivities(fetchedActivities);
            })
            .catch((error) => {
                console.error("Error fetching activities:", error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    });

    return (
        <div className="MyActivities">
            {isLoading?(
                <div>Loading...</div>
            ):(
                <div className="activities-container">
                    {userActivities.map((activity: Activity) =>(
                        <UserActivityCard key = {activity.id}
                                          activity = {activity}
                        />
                    ))}
                </div>
            )
            }
        </div>
    );
}
