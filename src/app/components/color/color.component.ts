import { Component, OnInit } from '@angular/core';
import { Color_ } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color_[]=[];
  currentColor:Color_;
  dataLoaded=false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
      this.dataLoaded=true;
    })
  }

  setCurrentColor(color:Color_){
    alert(color.colorName);
    this.currentColor=color;
  }

  getCurrentColorClass(color:Color_){
    if(color==this.currentColor){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active";
    }else{
      return "list-group-item";
    }
  }

  resetCurrentColor(color:Color_){
    color.colorName="";    
  }

}
