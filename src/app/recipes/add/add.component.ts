import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

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


  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  saveRecipe(){
    console.log(this.foodType,this.foodCategory);
    this.data=
    {
      "name":this.recipeName,
      "category":this.foodCategory,
      "type":this.foodType,
      "steps":this.recipeSteps
    }
    this.recipeService.addRecipe(this.data);
    

    


  }

}
