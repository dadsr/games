import {Item} from "./Item.ts";
import {DataTypesEnum} from "./enums/DataTypesEnum.ts";

export class MemoryItem extends Item {
    data1:string;
    data2:string;

    constructor(id: number, dataType: DataTypesEnum, data1: string, data2: string) {
        super(id, dataType);
        this.data1 = data1;
        this.data2 = data2;
    }
}

