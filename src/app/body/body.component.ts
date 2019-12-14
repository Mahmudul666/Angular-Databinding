import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  dataBindindImg:string = "assets/dtabinding.PNG";
  imagetitle:string = "";
  constructor() { }

  ngOnInit() {
  }

  changetitle(){
    this.imagetitle = " Data Binding Structure";
  }

}
