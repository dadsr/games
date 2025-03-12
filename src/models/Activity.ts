import {Item} from "./Item.ts";
import {User} from "./User.ts";
import {GameTypesEnum} from "./enums/GameTypesEnum.ts";


export class Activity {
    id: number;
    title: string;
    gameType: GameTypesEnum;
    items: Item[];
    lastUpdated: string;
    creator: User;


    constructor(id: number, title: string, gameType: GameTypesEnum, items: Item[], lastUpdated: string, creator: User) {
        this.id = id;
        this.title = title;
        this.gameType = gameType;
        this.items = items;
        this.lastUpdated = lastUpdated;
        this.creator = creator;
    }

}



