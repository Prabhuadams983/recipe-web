import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RecipeService } from 'src/app/services/recipe.service';
import { RecipesComponent } from '../recipes.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  foodType:string;
  foodCategory:string;
  recipeName:string;
  recipeSteps:string;
  data:any;


  constructor(private recipeService:RecipeService,private dialog:MatDialog) { }

  ngOnInit() {
  }

  saveRecipe(){
    this.data=
    {
      "name":this.recipeName,
      "category":this.foodCategory,
      "type":this.foodType,
      "steps":this.recipeSteps
    }
    this.recipeService.addRecipe(this.data).subscribe((res) => {
      if(res['status'] == 200){
          this.dialog.closeAll();
          this.recipeService.getRecipesList();
      }
    });

  }

}
