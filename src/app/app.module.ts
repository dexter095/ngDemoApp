import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { EvenComponent } from './game-controller/even/even.component';
import { OddComponent } from './game-controller/odd/odd.component';
import { BasichiglighterDirective } from './game-controller/basichiglighter.directive';
import { DropDownDirective } from './shared/drop-down.directive';
import { UsersComponent } from './users/users.component';
import { ActiveUsersComponent } from './users/active-users/active-users.component';
import { InActiveUsersComponent } from './users/in-active-users/in-active-users.component';

@NgModule({ 
  declarations: [
    AppComponent,
    AssignmentTwoComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameControllerComponent,
    EvenComponent,
    OddComponent,
    BasichiglighterDirective,
    DropDownDirective,
    UsersComponent,
    ActiveUsersComponent,
    InActiveUsersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
