import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: { name: string, description: string, imageUrl: string };
  @Output() getRecipeInfo = new EventEmitter<{name: string, description: string, imageUrl: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  passRecipeDesc(item){
    this.getRecipeInfo.emit(item)
  }

}
