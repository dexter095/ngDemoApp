import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails:{name: string, description: string, imageUrl: string, ingredients}
  constructor() { }

  ngOnInit(): void {
  }

}
