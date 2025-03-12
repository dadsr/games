import {Route, Routes} from "react-router-dom";
import {PageNotFound} from "../errors/PageNotFound.tsx";
import {MyActivities} from "../Activities/MyActivities/MyActivities.tsx";
import {EditActivity} from "../Activities/EditActivity/EditActivity.tsx";
import {JSX} from "react";

export function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path = "/login" Component={Login}/>
            <Route path = "/myActivities" Component={MyActivities}/>
            <Route path = "/editActivity/" Component={EditActivity}/>

            <Route path="*" Component={PageNotFound} />
        </Routes>
    );
}