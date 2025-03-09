import {DataTypesEnum} from "../utils/DataTypsEnum.ts";

export class Data {
    value:string;
    type: DataTypesEnum;


    constructor(value: string, type: DataTypesEnum|null) {
        this.value = value;
        this.type = (type)?type:DataTypesEnum.TEXT;
    }
}


