import {Cadres} from "./cadres";
export class Staff extends Cadres {
    private _work !: string;

    constructor(fullName: string, age: number, gender: string, address: string, work: string) {
        super(fullName, age, gender, address);
        this._work = work;
    }

    getWork(): string {
        return this._work;
    }

    setWork(value: string) {
        this._work = value;
    }
}