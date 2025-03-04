import "./MemoryCard.css";
import {getRandomColor} from "../../../utils/RandomColor.ts";
import {JSX} from "react";

interface memoryCardProps{
    data: string;
    isFlipped:boolean;
    isMatched:boolean;
    onClick: ()=>void;
}

export function MemoryCard(props:memoryCardProps): JSX.Element {
    const backgroundColor  = getRandomColor();
    const { data, isFlipped, isMatched, onClick } = props;


    return (
        <div className={`memory-card ${isMatched? "matched" : isFlipped ? "flipped" : ""}`} onClick={onClick}  >
            <div className="card-back" style={{backgroundColor }}></div>
            <div className="card-front">
                {data}
            </div>
        </div>
    );
}
