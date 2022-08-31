import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binfo4',
  templateUrl: './binfo4.component.html',
  styleUrls: ['./binfo4.component.css']
})
export class Binfo4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(login4: any){
    console.log("form submitted",login4)
  }
}
