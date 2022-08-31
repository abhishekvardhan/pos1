import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binfo1',
  templateUrl: './binfo1.component.html',
  styleUrls: ['./binfo1.component.css']
})
export class Binfo1Component {


  submit(login: any){
    console.log("form submitted",login)
  }
  
  
}
