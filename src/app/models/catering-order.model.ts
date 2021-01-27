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
  date?: Date;
}
