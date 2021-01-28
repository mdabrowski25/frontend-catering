import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Food} from '../models/food.model';
import {HttpCateringService} from '../services/http-catering.service';
import {Drink} from '../models/drink.model';
import {CateringOrder} from '../models/catering-order.model';

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
    this.orderForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      telephone: new FormControl(null, Validators.required),
      food: new FormArray([]),
      drink: new FormArray([])
    });
  }

  onSubmit(): void {
    const tabFood: Food[] = [];
    const tabDrink: Drink[] = [];
    const tab = this.orderForm.get('food').value;
    const tab2 = this.orderForm.get('drink').value;
    tab.forEach(e => tabFood.push(this.food[parseInt(e, 10)]));
    tab2.forEach(e => tabDrink.push(this.drink[parseInt(e, 10)]));
    let totalPrice = 0;
    tabFood.forEach(e => totalPrice = totalPrice + e.price);
    tabDrink.forEach(e => totalPrice = totalPrice + e.price);
    const cateringOrder: CateringOrder = {
      firstname: this.orderForm.value.firstname,
      lastname: this.orderForm.value.lastname,
      drinkOrdered: tabDrink,
      foodOrdered: tabFood,
      price: totalPrice,
      address: this.orderForm.value.address,
      telephoneNumber: this.orderForm.value.telephone,
      date: this.orderForm.value.date
    };
    this.httpClient.postOrder(cateringOrder).subscribe(() => {
        alert('Przyjęto zgłoszenie, proszę czekać na telefon');
      },
      () => {
        alert('Ups, coś poszło nie tak!');
      });
  }

  onCheckDrinkChange(event): void {
    const formArray: FormArray = this.orderForm.get('drink') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }

  onCheckFoodChange(event): void {
    const formArray: FormArray = this.orderForm.get('food') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }

        i++;
      });
    }
  }
}
