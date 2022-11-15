export interface IManagement<T> {
    add(t:T) :void;
    search(name: string): void;
    findAll(): T[];
}