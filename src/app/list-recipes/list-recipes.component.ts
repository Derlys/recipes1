import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent {
  recipes: Recipe[];
  constructor(private readonly recipeService: RecipeService) {
    this.recipes = this.recipeService.recipes;
  }
}
