import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  recipes: Recipe[] = [
    {
      name: '',
      ingredients: '',
      instructions: '',
    },
  ];
  recipe: Recipe = {
    name: '',
    ingredients: '',
    instructions: '',
  };
  addRecipe() {
    this.recipes.push(this.recipe);
  }
}
