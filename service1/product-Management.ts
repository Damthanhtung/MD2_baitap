import {Library} from "../model1/library";
import {IManagement} from "./IManagement";
import {Book} from "../model1/book";
import {Magazine} from "../model1/Magazine";
import {Newspaper} from "../model1/newspaper";
export class BookManagement {
     listLibrary: Library[] = [];

     add(library: Library): void {
       this.listLibrary.push(library);
    }
     fillAll(): Library[] {
        return this.listLibrary;
    }

     display(): void {
        for (const library of this.listLibrary) {
            console.log(library);
        }
    }

     delete(document: number): void {
        for (let i = 0; i < this.listLibrary.length; i++) {
            if (this.listLibrary[i]._documentCode === document) {
               this.listLibrary.splice(i, 1);
            }
        }
    }

      search(name: string) {
        for (let i = 0; i < this.listLibrary.length; i++) {
            if (this.listLibrary[i].name === name) {
                return this.listLibrary[i];
            }
        }

    }

}
