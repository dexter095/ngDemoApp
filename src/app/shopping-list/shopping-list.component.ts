import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingList = []
  constructor() {
    this.shoppingList.push({ 'name': 'Apple', 'amount': '10' }, { 'name': 'Tomato', 'amount': '5' })
  }

  ngOnInit(): void {
  }

}
