import "./MemoryGame.css";
import shuffle from "../../utils/Shuffles.ts";
import {MemoryCard} from "./MemoryCard/MemoryCard.tsx";
import {useState} from "react";

const items =[1,2,3,4,5,6,7,8,9,10];
const defaultState = { index: -1, value: null };
const maxColumns:number = 5;

export function MemoryGame(): React.JSX.Element {
    const columns = Math.min(maxColumns, Math.ceil(Math.sqrt(allItems.length)));

    const allItems:any[] =shuffle([...items,...items]);

    const [firstCard, setFirstCard] = useState(defaultState);
    const [secondCard, setSecondCard] = useState(defaultState);
    const remainingCouples:number = items.length;
    const [moves, setMoves] = useState(0);

    const handleCardClick = (index: number, item)=> {
        console.log(`Card at index ${index} clicked!`);
        if(firstCard.index === null){
            setFirstCard({index, item});
        } else if(firstCard.index !== null && secondCard.index === null){
            setSecondCard({index, item});
            setMoves((moves) => moves+1);

        }

        if (firstCard.value === secondCard.value){

        }
        setFirstCard(defaultState);
        setSecondCard(defaultState);

    }

    return(
        <div
            className="cardContainer"
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`,}}
        >
            {allItems.map ((item,index) =>(
                <MemoryCard
                    key = {index}
                    data = {item}
                    onClick = {() => handleCardClick(index,item)}
                />
            ))}
        </div>
    );
}


