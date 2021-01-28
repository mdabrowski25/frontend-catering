import {Drink} from './drink.model';
import {Food} from './food.model';

export class CateringOrder {
  orderId?: number;
  firstname?: string;
  lastname?: string;
  drinkOrdered?: Drink[];
  foodOrdered?: Food[];
  price?: number;
  address?: string;
  telephoneNumber?: string;
  date?: string;


  // tslint:disable-next-line:max-line-length
  constructor(firstname: string, lastname: string, drinkOrdered: Drink[], foodOrdered: Food[], price: number,
              address: string, telephoneNumber: string, date: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.drinkOrdered = drinkOrdered;
    this.foodOrdered = foodOrdered;
    this.price = price;
    this.address = address;
    this.telephoneNumber = telephoneNumber;
    this.date = date;
  }
}
