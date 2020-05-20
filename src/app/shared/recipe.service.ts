import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipe = []
  constructor() { 
    this.recipe.push(
      {
        'name': 'Test Recipe',
        'description': 'Test Recipe Description',
        'imageUrl': 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg'
      },
      {
        'name': 'Test Recipe 1',
        'description': 'Test Recipe Description 1',
        'imageUrl': 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg'
      }
    )
   }
   
}
