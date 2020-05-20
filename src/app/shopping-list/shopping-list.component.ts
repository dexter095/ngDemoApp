import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shared/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  shoppingList = []
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingList = this.shoppingService.shopingList
  }

}
