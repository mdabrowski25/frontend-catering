import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Food} from '../models/food.model';
import {HttpCateringService} from '../services/http-catering.service';
import {Drink} from '../models/drink.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  food: Food[];
  drink: Drink[];

  constructor(private httpClient: HttpCateringService) {
  }

  ngOnInit(): void {
    this.httpClient.getAllFood().subscribe(response => {
      this.food = response;
    });
    this.httpClient.getAllDrink().subscribe(response => {
      this.drink = response;
    });
  }

  onSubmit(): void {

  }
}
