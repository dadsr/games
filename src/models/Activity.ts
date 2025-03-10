import {Item} from "./Item.ts";
import {User} from "./User.ts";
import {GameTypesEnum} from "./GameTypesEnum.ts";
import {DataTypesEnum} from "./DataTypesEnum.ts";

export class Activity {
    id: number;
    title: string;
    gameType: GameTypesEnum;
    dataType: DataTypesEnum;
    items: Item[];
    lastUpdated: string;
    creator: User;

    constructor(id: number, title: string, gameType: GameTypesEnum, dataType: DataTypesEnum, items: Item[]|null, lastUpdated: string|null, creator: User) {
        this.id =id;
        this.title = title;
        this.gameType = gameType;
        this.dataType = dataType;
        this.items = (items) ? items : [];
        this.lastUpdated = (lastUpdated)?lastUpdated:new Date().toISOString();
        this.creator = creator;
    }
}



