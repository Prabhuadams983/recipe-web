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
  constructor(private recipeService : RecipeService) { }
  constructor(private recipeService : RecipeService,private dialog:MatDialog) { 

  }
 

  ngOnInit() {
    this.recipeService.getRecipesList().subscribe((res) =>{
      if(res['status'] == 200){
        this.recipesList = res['recipes'];
      }
    });
  }

  clickAdd(){
    this.dialog.open(AddComponent,{width:"250px"});
  }
  get(event){
    if(event.keyCode === 13){
      this.recipeService.name = this.recipeName;
        this.recipeService.getRecipesList().subscribe((res) =>{
          if(res['status'] == 200){
            this.recipesList = res['recipes'];
          }
        });
    }else{
      if(this.recipeName.length === 1){
        this.recipeService.name = "";
        this.ngOnInit();
      }
    }
  }

  loadRecipes(event){
    console.log(event);
  }

}
