import {Item} from "./Item.ts";
import {DataTypesEnum} from "./enums/DataTypesEnum.ts";

export class UnjumbleItems extends Item {
    sentence: string[];

    constructor(id: number, dataType: DataTypesEnum, sentence: string[]) {
        super(id, dataType);
        this.sentence = sentence;
    }
}

