import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      name: 'sopa',
      ingredients: '',
      instructions: '',
    },
  ];
  constructor() {}
}
