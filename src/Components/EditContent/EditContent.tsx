import "./EditContent.css";
import {useState} from "react";
import {DataTypesEnum} from "../../utils/DataTypsEnum.ts";

interface Activity {
    title: string;
    items: Item[];
    lastUpdated: string;
}
interface Item {
    id: number;
    data1: Data;
    data2: Data;
}

interface Data {
    value:string;
    type: DataTypesEnum;
}

const maxItems:number = 20;
const minItems:number = 3;


export function EditContent(): React.JSX.Element {
    const [selectedOption, setSelectedOption] = useState<'identical' | 'different'>('identical');

    const [activity,setActivity] = useState<Activity>();
    const [data,setData] = useState<Data>({"value":"","type":DataTypesEnum.TEXT});
    const [items, setItems] = useState<Item[]> ([
        { id: 1, value1: data, value2: data },
        { id: 2, value1: data, value2: data },
        { id: 3, value1: data, value2: data }
    ]);


    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value as 'single' | 'pair');
    };

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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        setActivity((prevActivity) =>({
            ...prevActivity,
            [name]: value,
            lastUpdated: new Date().toLocaleString(),
        }));
    };

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
