import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  menu:string;
  recipesList:any[] = [];
  @Output() recipesEmitter = new EventEmitter();
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onSelect(categoryType){
    this.menu = categoryType;
    if(this.menu){
      this.recipeService.category = this.menu;
      this.recipeService.getRecipesList().subscribe((res) => {
        if(res['status'] == 200){
          this.recipesList = res['recipes'];
          this.recipesEmitter.emit(this.recipesList);
        }
      });
    }else{
      this.recipeService.category = this.menu;
      this.recipeService.getRecipesList().subscribe((res) => {
        if(res['status'] == 200){
          this.recipesList = res['recipes'];
    }
  });
  }
}

}
