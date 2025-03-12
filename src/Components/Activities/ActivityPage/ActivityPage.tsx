import "./ActivityPage.css";
import {JSX, useState} from "react";
import {MemoryGame} from "../../games/memoryGame/MemoryGame.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Activity} from "../../../models/Activity.ts";
import shuffle from "../../../utils/Shuffles.ts";
import {DataModeEnum} from "../../../models/enums/DataModeEnum.ts";

interface LocationState {
    state: {
        activity: Activity;
    };
}

export function ActivityPage(): JSX.Element {
    const navigate = useNavigate();

    const location = useLocation() as LocationState;
    const {activity} = location.state;

    const [gameStarted, setGameStarted] = useState(false);
    const [gameData, setGameData] = useState<string[]>([]);


    // todo
    const handleGameStart = () => {
        const combinedData = shuffle(
            (activity.dataMode == DataModeEnum.IDENTICAL)?
                [...activity.items.map(item => item.data1), ...activity.items.map(item => item.data1)]
                : activity.items.flatMap(item => [item.data1, item.data2])
        );
        setGameData(combinedData);
        setGameStarted(true);
    };

    const handleEditActivity = () => {
        navigate(`/edit-activity/`,{
            state: {
                activity,
                mode: "edit",
            }
        });
    };


    const renderContent = () => {
        if (gameStarted) {
            return <MemoryGame activity={activity} gameData={gameData} />;
        }
        return (
            <div className="activity-controls">
                <button onClick={handleGameStart}>Start Game</button>
                <button onClick={handleEditActivity}>Edit Activity</button>
            </div>
        );
    };

    return (
        <div className="ActivityPage">
            <h1>Memory Card Game</h1>
            {renderContent()}
        </div>
    );
}
