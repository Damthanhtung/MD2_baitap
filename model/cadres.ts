
export class Cadres {
    private _fullName !: string;
    private _age !: number;
    private _gender !:string;
    private _address !: string;

    constructor(fullName: string, age: number, gender: string, address: string) {
        this._fullName = fullName;
        this._age = age;
        this._gender = gender;
        this._address = address;
    }

    getFullName(): string {
        return this._fullName;
    }

    setFullName(value: string) {
        this._fullName = value;
    }

    getAge(): number {
        return this._age;
    }

    setAge(value: number) {
        this._age = value;
    }

    getGender(): string {
        return this._gender;
    }

    setGender(value: string) {
        this._gender = value;
    }

    getAddress(): string {
        return this._address;
    }

    setAddress(value: string) {
        this._address = value;
    }
}