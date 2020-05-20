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
        'name': 'Chilly Pizza',
        'description': 'The pizza of Gaeta in Lazio, on the border with Campania. Modern pizza was invented in Naples, and the dish and its variants have since become popular in many countries.',
        'imageUrl': 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg',
        'ingredients': [{ 'name': 'Bread', 'amount': '2' }, { 'name': 'Chillies', 'amount': '20' }]
      },
      {
        'name': 'French Fries',
        'description': 'French fries are served hot, are generally eaten as part of lunch or dinner or by themselves as a snack, and they commonly appear on the menus of diners, fast food restaurants, pubs, and bars.',
        'imageUrl': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsNAofSvoSFKVtNK7MOcdKgB1cVeVDSuoHx8nq5W85CcqPe_E7&usqp=CAU',
        'ingredients': [{ 'name': 'Potato', 'amount': '5' }, { 'name': 'Onion', 'amount': '1' }]
      }
    )
  }

}
