import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binfo2',
  templateUrl: './binfo2.component.html',
  styleUrls: ['./binfo2.component.css']
})
export class Binfo2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(login2: any){
    console.log("form submitted",login2)
  }
  
}
