import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
