import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    ListRecipesComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule,
    RouterLink,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
