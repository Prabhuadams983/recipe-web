import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './utils/material/material';
import { RecipesComponent } from './recipes/recipes.component';
import { FiltersComponent } from './filters/filters.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { AddComponent } from './recipes/add/add.component';
import { ViewComponent } from './recipes/view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    FiltersComponent,
    RecipesListComponent,
    RecipeItemComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  entryComponents:[AddComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
