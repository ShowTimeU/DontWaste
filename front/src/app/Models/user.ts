export class User {

  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  area: string;
  createdOn: string;
  updatedOn: string;
  secToken: string;

  constructor(id: number, name: '', email: string, password: string, phone: string,
              area: string, createdOn: string, updatedOn: string, secToken: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.area = area;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.secToken = secToken;
  }

}
