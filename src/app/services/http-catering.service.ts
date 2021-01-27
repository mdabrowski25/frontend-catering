import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from '../models/food.model';
import {Drink} from '../models/drink.model';
import {CateringOrder} from '../models/catering-order.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCateringService {

  constructor(private httpClient: HttpClient) { }

  url = 'https://backend-catering-s-krol.herokuapp.com/';

  getAllFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.url + 'food');
  }
  getAllDrink(): Observable<Drink[]> {
    return this.httpClient.get<Drink[]>(this.url + 'drink');
  }
  postOrder(order: CateringOrder): Observable<CateringOrder> {
    return this.httpClient.post<CateringOrder>(this.url + 'order/post', order);
  }


}
