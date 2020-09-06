import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private url = "http://localhost:3000";
  public name:string;
  public type:string;
  public category:string;
  constructor(private _http:HttpClient) { }

  getRecipesList(){
    let params = new HttpParams();
    if(this.type){
      params = params.append('type',this.type);
    }
    if(this.category){
      params = params.append('category',this.category);
    }
    if(this.name){
      params = params.append('name',this.name);
    }
    return this._http.get(`${this.url}/get`,{params});
  }
}
