import {Library} from "./library";

export class Newspaper extends Library {
    _releaseDate !: number;


    constructor(documentCode: number, imprint: string, releaseNumber: number, name: string, releaseDate: number) {
        super(documentCode, imprint, releaseNumber, name);
        this._releaseDate = releaseDate;
    }
}
