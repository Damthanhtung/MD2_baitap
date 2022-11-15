import {Cadres} from "./cadres";
enum Rank {
    rank1 = 1,
    rank2,
    rank3,
    rank4,
    rank5,
    rank6,
    rank7,
    rank8,
    rank9,
    rank10
}
export class Worker extends Cadres {
   private _rank !: number;


    constructor(fullName: string, age: number, gender: string, address: string, rank: number) {
        super(fullName, age, gender, address);
        this._rank = rank;
    }

    getRank(): number {
        return this._rank;
    }

    setRank(value: number) {
        this._rank = value;
    }

}