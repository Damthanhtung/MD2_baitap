import {Library} from "./library";

export class Book extends Library {
    _writerName!: string;
    _numberOfPage !: string;


    constructor(documentCode: number, imprint: string, releaseNumber: number, name: string, writerName: string, numberOfPage: string) {
        super(documentCode, imprint, releaseNumber, name);
        this._writerName = writerName;
        this._numberOfPage = numberOfPage;
    }
}