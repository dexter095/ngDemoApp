import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDescription: {}

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.setRecipeDescription.subscribe(
      (recipe: { name: string, description: string, imageUrl: string, ingredients }) => {
        this.recipeDescription = recipe
      }
    )
  }
}
