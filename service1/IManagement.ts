export interface IManagement <T>{
    add(t:T): void;
    delete(documentCode: number) :void;
    fillAll(): T[];
    search(name: string) :void;

}