import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: { name: string, description: string, imageUrl: string };
  // @Output() getRecipeInfo = new EventEmitter<{name: string, description: string, imageUrl: string}>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  passRecipeDesc(item) {
    // this.getRecipeInfo.emit(item)
    this.recipeService.setRecipeDescription.emit(item)
  }

}
