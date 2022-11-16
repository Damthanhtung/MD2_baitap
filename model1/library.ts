export  class Library {
    _documentCode!: number;
    _imprint !: string;
    _releaseNumber !: number;
    name!: string;


    constructor(documentCode: number, imprint: string, releaseNumber: number, name: string) {
        this._documentCode = documentCode;
        this._imprint = imprint;
        this._releaseNumber = releaseNumber;
        this.name = name;
    }
}