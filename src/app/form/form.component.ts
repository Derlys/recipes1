import { Component } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private readonly router: Router) {}
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
    this.router.navigate(['/']);
  }
}
