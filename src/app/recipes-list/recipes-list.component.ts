import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Input() recipes:any[];
  private type:string
  constructor(private recipeService : RecipeService) {
   }

  ngOnInit() {
  }
  onSelectType(){
    this.recipeService.type = this.type;
    this.recipeService.getRecipesList().subscribe((res) =>{
      if(res['status'] == 200){
        this.recipes = res['recipes'];
      }
    });
  }

}
