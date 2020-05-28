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
  // tslint:disable-next-line:variable-name
  private _kosher: boolean;
  // tslint:disable-next-line:variable-name
  private _vegeterian: boolean;
  // tslint:disable-next-line:variable-name
  private _vegan: boolean;
  // tslint:disable-next-line:variable-name
  private _area: string;
  // tslint:disable-next-line:variable-name
  private _institution: string;
  // tslint:disable-next-line:variable-name
  private _quantity: number;



  // tslint:disable-next-line:max-line-length
  constructor(id: number, productName: string, description: string, image: string, startingPrice: number,
              price: number, createdOn: string, updatedOn: string, kosher: boolean, vegeterian: boolean, vegan: boolean,
              area: string, institution: string, quantity: number) {
    this._id = id;
    this._productName = productName;
    this._description = description;
    this._image = image;
    this._startingPrice = startingPrice;
    this._price = price;
    this._createdOn = createdOn;
    this._updatedOn = updatedOn;
    this._kosher = kosher;
    this._vegeterian = vegeterian;
    this._vegan = vegan;
    this._area = area;
    this._institution = institution;
    this._quantity = quantity;
  }


  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  get kosher(): boolean {
    return this._kosher;
  }

  set kosher(value: boolean) {
    this._kosher = value;
  }

  get vegeterian(): boolean {
    return this._vegeterian;
  }

  set vegeterian(value: boolean) {
    this._vegeterian = value;
  }

  get vegan(): boolean {
    return this._vegan;
  }

  set vegan(value: boolean) {
    this._vegan = value;
  }

  get area(): string {
    return this._area;
  }

  set area(value: string) {
    this._area = value;
  }

  get institution(): string {
    return this._institution;
  }

  set institution(value: string) {
    this._institution = value;
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
