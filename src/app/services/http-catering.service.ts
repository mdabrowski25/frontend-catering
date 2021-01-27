import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from '../models/food.model';
import {Drink} from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class HttpCateringService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('jrvjsatoukepqcr3:27f8b60034078ad4c7aae27f86054202931fcedf6a9efac25af7fedda83363fb')
    })
  };

  url = 'https://backend-catering-s-krol.herokuapp.com/';

  getAllFood(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(this.url + 'food', this.httpOptions);
  }
  getAllDrink(): Observable<Drink[]> {
    return this.httpClient.get<Drink[]>(this.url + 'drink', this.httpOptions);
  }


}
