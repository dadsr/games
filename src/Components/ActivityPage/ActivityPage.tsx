import "./ActivityPage.css";
import {MemoryGame} from "../memoryGame/MemoryGame.tsx";
import {JSX, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Activity} from "../../models/Activity.ts";
import shuffle from "../../utils/Shuffles.ts";
import {DataModeEnum} from "../../models/DataModeEnum.ts";
import {getRandomColor} from "../../utils/RandomColor.ts";

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

    return (
        <div className="ActivityPage">
            <h1>Memory Card Game</h1>
            {!gameStarted && (
                <button onClick={handleGameStart}>Start Game</button>
                <button onClick={handleEditActivity}>Edit Activity</button>
            )}
            <div className="game-container">
                {gameStarted && (
                    <MemoryGame/>
                )}
            </div>
        </div>
    );
}
