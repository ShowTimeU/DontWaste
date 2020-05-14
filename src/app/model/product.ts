export class Product {

  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _productName: string;
  // tslint:disable-next-line:variable-name
  private _description: string;
  // tslint:disable-next-line:variable-name
  private _image: string;
  // tslint:disable-next-line:variable-name
  private _startingPrice: number;
  // tslint:disable-next-line:variable-name
  private _price: number;
  // tslint:disable-next-line:variable-name
  private _createdOn: string;
  // tslint:disable-next-line:variable-name
  private _updatedOn: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, productName: string, description: string, image: string, startingPrice: number, price: number, createdOn: string, updatedOn: string) {
    this._id = id;
    this._productName = productName;
    this._description = description;
    this._image = image;
    this._startingPrice = startingPrice;
    this._price = price;
    this._createdOn = createdOn;
    this._updatedOn = updatedOn;
  }


  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get startingPrice(): number {
    return this._startingPrice;
  }

  set startingPrice(value: number) {
    this._startingPrice = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get createdOn(): string {
    return this._createdOn;
  }

  set createdOn(value: string) {
    this._createdOn = value;
  }

  get updatedOn(): string {
    return this._updatedOn;
  }

  set updatedOn(value: string) {
    this._updatedOn = value;
  }
}
