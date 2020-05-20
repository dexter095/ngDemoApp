import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe = []
  setRecipeDescription = new EventEmitter<{ name: string, description: string, imageUrl: string }>()
  
  constructor() {
    this.recipe.push(
      {
        'name': 'Test Recipe',
        'description': 'Test Recipe Description',
        'imageUrl': 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg',
        'ingredients': [{ 'name': 'Bread', 'qty': 2 }, { 'name': 'Chillies', 'qty': 20 }]
      },
      {
        'name': 'Test Recipe 1',
        'description': 'Test Recipe Description 1',
        'imageUrl': 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg',
        'ingredients': [{ 'name': 'Potato', 'qty': 5 }, { 'name': 'Onion', 'qty': 1 }]
      }
    )
  }

}
