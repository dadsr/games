import {Data} from "./Data.ts";

export class Item {
    private id: number;
    private data1: Data;
    private data2: Data;

    constructor(id: number, data1: Data|null, data2: Data|null) {
        this.id = id;
        this.data1 = data1;
        this.data2 = data2;
    }
}