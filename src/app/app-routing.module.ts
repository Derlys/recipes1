import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-recipes',
    pathMatch: 'full',
  },
  {
    path: 'list-recipes',
    component: ListRecipesComponent,
  },

  {
    path: 'create',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
