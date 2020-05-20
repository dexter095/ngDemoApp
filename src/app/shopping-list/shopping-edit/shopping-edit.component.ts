import { Component, OnInit } from '@angular/core';

import { ShoppingService } from 'src/app/shared/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void { }

  addIngredient(name, amount) {
    this.shoppingService.addIngredients({
      'name': name.value,
      'amount': amount.value
    })
  }

}
