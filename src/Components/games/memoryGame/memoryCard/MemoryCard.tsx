import "./MemoryCard.css";
import {JSX} from "react";

interface memoryCardProps{
    data: string;
    backgroundColor: string;
    isFlipped:boolean;
    isMatched:boolean;
    onClick: ()=>void;
}

export function MemoryCard(props:memoryCardProps): JSX.Element {
    const { data, backgroundColor, isFlipped, isMatched, onClick } = props;


    return (
        <div className={`memory-card ${isMatched? "matched" : isFlipped ? "flipped" : ""}`} onClick={onClick}  >
            <div className="card-back" style={{backgroundColor }}></div>
            <div className="card-front">
               <div className="card-data">{data}</div>
            </div>
        </div>
    );
}
