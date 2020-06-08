export class User {

  // tslint:disable-next-line:variable-name
  private _id: number;
  // tslint:disable-next-line:variable-name
  private _name = '';
  // tslint:disable-next-line:variable-name
  private _email: string;
  // tslint:disable-next-line:variable-name
  private _password: string;
  // tslint:disable-next-line:variable-name
  private _phone: string;
  // tslint:disable-next-line:variable-name
  private _area: string;
  // tslint:disable-next-line:variable-name
  private _createdOn: string;
  // tslint:disable-next-line:variable-name
  private _updatedOn: string;
  // tslint:disable-next-line:variable-name
  private _secToken: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number, name: string, email: string, password: string, phone: string,
              area: string, createdOn: string, updatedOn: string, secToken: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._phone = phone;
    this._area = area;
    this._createdOn = createdOn;
    this._updatedOn = updatedOn;
    this._secToken = secToken;
  }

  get secToken(): string {
    return this._secToken;
  }

  set secToken(value: string) {
    this._secToken = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get area(): string {
    return this._area;
  }

  set area(value: string) {
    this._area = value;
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
