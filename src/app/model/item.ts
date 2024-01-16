export class Item {
    private _id: string;
    constructor() {
        this._id = "";
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}