import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Router } from '@angular/router';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(
    private readonly router: Router,
    private readonly recipeService: RecipeService
  ) {}

  recipe: Recipe = {
    name: '',
    ingredients: '',
    instructions: '',
  };
  addRecipe() {
    this.recipeService.recipes.push(this.recipe);
    this.router.navigate(['/']);
  }
}
