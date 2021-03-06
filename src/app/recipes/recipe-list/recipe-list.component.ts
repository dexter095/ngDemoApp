import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() getRecipeDesc = new EventEmitter<{ name: string, description: string, imageUrl: string }>()
  recipe = []
  constructor(private recipeService: RecipeService ) { }

  ngOnInit(): void {
    console.log("REcipe list", this.recipeService.recipe)
    this.recipe = this.recipeService.recipe
  }

  getRecipeDescTwo(recipeDesc) {
    this.getRecipeDesc.emit(recipeDesc)
  }


}
