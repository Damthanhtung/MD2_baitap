import {Cadres} from "../model/cadres";
import {IManagement} from "./IManagement";

export class CadresManagement implements IManagement<Cadres>{
    public listCadres: Cadres[] = [];
    add(t: Cadres): void {
        this.listCadres.push(t);
    }

    findAll(): Cadres[] {
        return this.listCadres;
    }

    search(name: string): Cadres | string {
        for (let i = 0; i < this.listCadres.length;i++) {
            if (this.listCadres[i].getFullName() === name) {
                return this.listCadres[i];
            }
        }
        return ' Không tìm thấy  ';
    }


}
