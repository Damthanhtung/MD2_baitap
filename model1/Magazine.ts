import {Library} from "./library";

export class Magazine extends Library {
    _issueNumber !: number;
    _releaseMonth !: number;


    constructor(documentCode: number, imprint: string, releaseNumber: number, name: string, issueNumber: number, releaseMonth: number) {
        super(documentCode, imprint, releaseNumber, name);
        this._issueNumber = issueNumber;
        this._releaseMonth = releaseMonth;
    }
}