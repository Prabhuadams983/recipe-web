import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  clickAdd(){
    this.dialog.open(AddComponent,{width:"250px"});
  }
}
