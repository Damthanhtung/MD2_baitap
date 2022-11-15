import {Cadres} from "./cadres";
export class Engineer extends Cadres {
    private _trainingIndustry !: string;

    constructor(fullName: string, age: number, gender: string, address: string, trainingIndustry: string) {
        super(fullName, age, gender, address);
        this._trainingIndustry = trainingIndustry;
    }

    getTrainingIndustry(): string {
        return this._trainingIndustry;
    }

    setTrainingIndustry(value: string) {
        this._trainingIndustry = value;
    }
}