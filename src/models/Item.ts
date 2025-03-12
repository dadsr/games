import {DataTypesEnum} from "./enums/DataTypesEnum.ts";

export class Item {
    id: number;
    dataType: DataTypesEnum;


    constructor(id: number, dataType: DataTypesEnum) {
        this.id = id;
        this.dataType = dataType;
    }
}

