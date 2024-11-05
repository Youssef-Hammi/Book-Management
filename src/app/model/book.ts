import { Title } from "@angular/platform-browser";


export class Book {
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    public get title(): String {
        return this._title;
    }
    public set title(value: String) {
        this._title = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    /*private _id:Number;
    private _title:String;
    private _author:String;
    private _price:Number;
    constructor(id:Number,title:String,author:string,price:number){
        this._id=id;
        this._title=title;
        this._author=author;
        this._price=price;

    }*/
    constructor(private _id: number,
        private _title: String,
        private _author: string,
        private _price: number){}
    
  
}

