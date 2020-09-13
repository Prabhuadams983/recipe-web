import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  menu:string='';
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSelect(categoryType){
    this.menu = categoryType;
    this.recipeService.category = categoryType;
    this.recipeService.getRecipesList();
}

}
