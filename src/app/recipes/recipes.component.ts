import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeName:string;
  recipesList:any[]=[];
  constructor(private recipeService : RecipeService,private dialog:MatDialog) { }

  ngOnInit() {
    this.getList();
  }

  clickAdd(){
    this.dialog.open(AddComponent,{width:"250px"});
  }
  
  get(event){
    if(event.keyCode === 13){
      this.recipeService.searchRecipe(this.recipeName);
      this.recipeName = null;
    }
  }

  getList(){
    this.recipeService.getRecipesList();
  }

  ngOnDestroy(){
    this.recipeService.recipesList.unsubscribe();
  }
}
