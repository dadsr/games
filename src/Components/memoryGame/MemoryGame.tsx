import "./MemoryGame.css";
import shuffle from "../../utils/Shuffles.ts";
import {MemoryCard} from "./MemoryCard/MemoryCard.tsx";
import {useEffect, useState} from "react";
import {getRandomColor} from "../../utils/RandomColor.ts";

const items =["1","2","3","4","5","6","7","8","9","10"];
const defaultState = { index: -1, item: "" };
const maxColumns:number = 5;
const minColumns:number = 3;

export function MemoryGame(): React.JSX.Element {

    // const [gameData, setGameData] = useState<{ data: string; color: string }[]>([]);
    const columns = Math.min(maxColumns,Math.max(minColumns, Math.floor(Math.sqrt(gameData.length))));

    const [firstCard, setFirstCard] = useState(defaultState);
    const [secondCard, setSecondCard] = useState(defaultState);

    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [matchedCards, setMatchedCards] = useState<string[]>([]);
    const [moves, setMoves] = useState(0);

    // useEffect(() => {
    //     const combinedData = shuffle(
    //         [...items, ...items].map((data) => ({data, color: getRandomColor(),}))
    //     );
    //     setGameData(combinedData);
    // }, [items]);


    const handleCardClick = (index: number, item:string)=> {
        console.log(`Card at index ${index} clicked!`);

        if (flippedCards.includes(index) || matchedCards.includes(item)) {
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
            if (firstCard.item === item){
                console.log(`user found pair of ${item}`);
                setTimeout(()=>{setMatchedCards((prev) => [...prev, item])},1000);

            }
            setTimeout(() => {
                setFirstCard(defaultState);
                setSecondCard(defaultState);
                setFlippedCards([]);
            },1000)
        }
    }

    return(
        <>
            <h2 className="moves-title">{matchedCards.length === items.length?"Victory!!!":`moves:${moves}`}</h2>
            <div
                className="cardContainer"
                style={{ '--columns': columns } as React.CSSProperties}
            >

                <div className="bord">{gameData.map ((item,index) =>(
                    <MemoryCard
                        key = {index}
                        data = {item.data}
                        backgroundColor = {item.color || "gray"}
                        isFlipped={flippedCards.includes(index)}
                        isMatched={matchedCards.includes(item.data)}
                        onClick = {() => handleCardClick(index,item.data)}
                    />
                ))}
                </div>
            </div>

        </>
    );
}


