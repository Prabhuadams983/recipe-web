import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url = "http://localhost:3000";
  public name:string;
  public type:string;
  public category:string;
  public recipesList = new Subject();
  constructor(private _http:HttpClient) { }

  getRecipesList(){
    let params = new HttpParams();
    if(this.type){
      params = params.append('type',this.type);
    }
    if(this.category){
      params = params.append('category',this.category);
    }
    this._http.get(`${this.url}/get`,{params}).subscribe((res) =>{
      if(res['status'] == 200){
        this.recipesList.next(res['recipes']);
      }
    });
  }

  addRecipe(data){
    return this._http.post(this.url+'/add',data);
}

searchRecipe(name){
  const params = new HttpParams().set('name',name);
  this._http.get(`${this.url}/search`,{params}).subscribe((res) =>{
    if(res['status'] == 200){
      this.recipesList.next(res['recipes']);
    }
  });
}
}
