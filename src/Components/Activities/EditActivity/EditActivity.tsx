import "./EditActivity.css";
import {useState} from "react";
import {DataTypesEnum} from "../../models/DataTypesEnum.ts";
import {Activity} from "../../models/Activity.ts";
import {Item} from "../../models/Item.ts";
import {Data} from "../../models/Data.ts";
import {useLocation} from "react-router-dom";

const maxItems:number = 20;
const minItems:number = 3;

interface LocationState {
    state: {
        activity: Activity;
        mode: string;
    };
}


export function EditActivity(): React.JSX.Element {
    const location = useLocation() as LocationState;
    const {activity, mode} = location.state;


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
