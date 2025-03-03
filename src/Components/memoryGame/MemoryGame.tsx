import "./MemoryGame.css";
import shuffle from "../../utils/Shuffles.ts";
import {MemoryCard} from "./MemoryCard/MemoryCard.tsx";

export function MemoryGame(): React.JSX.Element {
    const items =[1,2,3,4,5,6,7,8,9,10];
    const allItems:any[] =shuffle([...items,...items]);
    const columns = Math.min(5, Math.ceil(Math.sqrt(allItems.length))); // Max 5 columns, adjust based on total items

    function handleCardClick(index: number): void {
        console.log(`Card at index ${index} clicked!`);
        // Add your card flip or game logic here
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
                    onClick = {() => handleCardClick(index)}
                />
            ))}
        </div>
    );
}


