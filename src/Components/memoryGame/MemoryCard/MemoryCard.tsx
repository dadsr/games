import "./MemoryCard.css";
import {getRandomColor} from "../../../utils/RandomColor.ts";
import {JSX} from "react";

interface memoryCardProps{
    data: number;
    onClick: ()=>void;
}

export function MemoryCard(props:memoryCardProps): JSX.Element {
    const backgroundColor  = getRandomColor();

    return (
        <div className="MemoryCard" style={{backgroundColor }}>
            <h2>{props.data}</h2>;
        </div>
    );
}
