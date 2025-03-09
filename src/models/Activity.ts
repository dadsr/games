import {Item} from "./Item.ts";
import {User} from "./User.ts";

export class Activity {
    id: number;
    title: string;
    items: Item[];
    lastUpdated: string;
    creator: User;

    constructor(id: number, title: string, items: Item[]|null, lastUpdated: string|null, creator: User) {
        this.id =id;
        this.title = title;
        this.items = (items) ? items : [];
        this.lastUpdated = (lastUpdated)?lastUpdated:new Date().toISOString();
        this.creator = creator;
    }
}



