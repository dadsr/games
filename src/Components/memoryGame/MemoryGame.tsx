import "./MemoryGame.css";
import shuffle from "../../utils/Shuffles.ts";
import {MemoryCard} from "./MemoryCard/MemoryCard.tsx";
import {useState} from "react";

const items =["1","2","3","4","5","6","7","8","9","10"];
const defaultState = { index: -1, item: "" };
 const maxColumns:number = 5;

export function MemoryGame(): React.JSX.Element {
    const [allItems] = useState<string[]>(shuffle([...items, ...items]));
    const columns = Math.min(maxColumns, Math.ceil(Math.sqrt(allItems.length)));

    const [firstCard, setFirstCard] = useState(defaultState);
    const [secondCard, setSecondCard] = useState(defaultState);

    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<string[]>([]);
    const [moves, setMoves] = useState(0);

    const handleCardClick = (index: number, item:string)=> {
        console.log(`Card at index ${index} clicked!`);

        if (flippedCards.includes(index)) {
            return;
        }

        if(firstCard.index === -1){
            setFirstCard({index, item});
            setFlippedCards((prev) => [...prev, index]);
            setMoves((moves) => moves+1);

        } else if(secondCard.index === -1){
            setSecondCard({index, item});
            setFlippedCards((prev) => [...prev, index]);
            setMoves((moves) => moves+1);
            console.log(`37:` ,firstCard.item,secondCard.item);
            if (firstCard.item === item){
                console.log(`user found pair of ${item}`);
                setMatchedCards((prev) => [...prev, item]);
            }
            setTimeout(() => {
                setFirstCard(defaultState);
                setSecondCard(defaultState);
                setFlippedCards([]);
            },1000)
        }

    }

    return(
        <div
            className="cardContainer"
            style={{ '--columns': columns } as React.CSSProperties}
        >
            <h2 className="moves-title">moves:{moves}</h2>
           <div className="bord">{allItems.map ((item,index) =>(
                <MemoryCard
                    key = {index}
                    data = {item}
                    isFlipped={flippedCards.includes(index)}
                    isMatched={matchedCards.includes(item)}
                    onClick = {() => handleCardClick(index,item)}
                />
            ))}
           </div>
        </div>
    );
}


