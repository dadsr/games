import {Item} from "./Item.ts";
import {DataTypesEnum} from "./enums/DataTypesEnum.ts";

export class ComplitionItem extends Item {
    sentence: string;
    missingWords: string[];
    incorrectWords: string[];


    constructor(id: number, dataType: DataTypesEnum, sentence: string, missingWords: string[], incorrectWords: string[]) {
        super(id, dataType);
        this.sentence = sentence;
        this.missingWords = missingWords;
        this.incorrectWords = incorrectWords;
    }

}

