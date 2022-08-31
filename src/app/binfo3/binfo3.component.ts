import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binfo3',
  templateUrl: './binfo3.component.html',
  styleUrls: ['./binfo3.component.css']
})
export class Binfo3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(login3: any){
    console.log("form submitted",login3)
  }

}
