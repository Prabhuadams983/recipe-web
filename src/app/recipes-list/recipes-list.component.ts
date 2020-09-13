import { Component, OnInit, Input } from '@angular/core';
import { FiltersComponent } from '../filters/filters.component';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  private type:string=""; 
  private recipes;
  constructor(private recipeService : RecipeService) {
        this.recipeService.recipesList.subscribe((list) => {
          this.recipes = list;
        });
   }

  ngOnInit() {
  }

  onSelectType(){
      this.recipeService.type = this.type;
      this.recipeService.getRecipesList();
  }

}
