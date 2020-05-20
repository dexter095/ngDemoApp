import { Component, OnInit, Input } from '@angular/core';

import { ShoppingService } from '../../shared/shopping.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: { name: string, description: string, imageUrl: string, ingredients }
  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
  }

  addToIngredientList() {
    this.slService.addIngredients(this.recipeDetails.ingredients)
  }

}
