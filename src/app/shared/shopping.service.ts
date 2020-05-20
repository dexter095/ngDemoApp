import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  shopingList = []

  constructor() {
    this.shopingList.push({ 'name': 'Apple', 'amount': '10' }, { 'name': 'Tomato', 'amount': '5' })
  }

  addIngredients(item) {
    if (item.length > 1) {
      this.shopingList.push(...item)
    } else {
      this.shopingList.push(item)
    }
  }

}
