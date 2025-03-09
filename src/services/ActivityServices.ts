import {Activity} from "../models/Activity.ts";
import axios from "axios";


export class ActivityServices {
    async getActivities ( userId:number): Promise<Activity[]> {
        const response = await axios.get<Activity[]>(`/user/${userId}/activities/`);
        return response.data;
    }

}
const activityServices = new ActivityServices();
export default activityServices;