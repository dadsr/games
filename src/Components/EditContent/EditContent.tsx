import "./EditContent.css";
import {useState} from "react";
interface Activity {
    title: string;
    items: Item[];
    lastUpdated: string;
}
interface Item {
    id: number;
    value1: string;
    value2: string;
}
const maxItems:number = 20;
const minItems:number = 3;


export function EditContent(): React.JSX.Element {
    const [activity,setActivity] = useState<Activity>();
    const [selectedOption, setSelectedOption] = useState<'identical' | 'different'>('identical');
    const [items, setItems] = useState<Item[]> ([
        { id: 1, value1: '', value2: '' },
        { id: 2, value1: '', value2: '' },
        { id: 3, value1: '', value2: '' }
    ]);

    const addNewItem = () => {
        if (items.length < maxItems) {
            setItems([...items, { id: items.length + 1, value1: '', value2: '' }]);
        }
    };
    const updateItem = (id: number, value1: string, value2: string) => {
        setItems(items.map(item =>
            (item.id === id ? { ...item, value1, value2 } : item)));
    }
    const deleteItem = (id: number) => {
        if(items.length > minItems)
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <div className="edit-content">

            <label className="activity-title">Activity Title:</label>
            <input
                type="text"
                name="title"
                value={activity.title}
                onChange={handleChange}
                required
            />
            <span className = "last-modified">${activity.lastUpdated}</span>


        </div>
    );
}
