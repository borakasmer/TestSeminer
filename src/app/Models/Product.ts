export class Product {

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

    private _Price: number;
    public get Price(): number {
        return this._Price;
    }
    public set Price(v: number) {
        this._Price = v;
    }

    private _ID: number;
    public get ID(): number {
        return this._ID;
    }
    public set ID(v: number) {
        this._ID = v;
    }

    constructor(price: number, id: number, name: string) {
        this.ID = id;
        this.Name = name;
        this.Price = price;
    }
}