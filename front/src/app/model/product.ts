export class Product {
  id: number;
  productName: string;
  description: string;
  image: string;
  startingPrice: number;
  price: number;
  createdOn: string;
  updatedOn: string;
  kosher: boolean;
  vegeterian: boolean;
  vegan: boolean;
  area: string;
  institution: string;
  quantity: number;
  totalPrice: number;


  constructor(id: number, productName: string, description: string, image: string, startingPrice: number,
              price: number, createdOn: string, updatedOn: string, kosher: boolean, vegeterian: boolean, vegan: boolean,
              area: string, institution: string, quantity: number, totalPrice: number) {
    this.id = id;
    this.productName = productName;
    this.description = description;
    this.image = image;
    this.startingPrice = startingPrice;
    this.price = price;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.kosher = kosher;
    this.vegeterian = vegeterian;
    this.vegan = vegan;
    this.area = area;
    this.institution = institution;
    this.quantity = quantity;
    this.totalPrice = totalPrice*quantity;
  }

}
