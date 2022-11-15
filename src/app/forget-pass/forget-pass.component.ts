import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['forget-pass.component.css'],
})
export class ForgetPassComponent implements OnInit {

  email: string;
  code: string;

  constructor() { 
    this.email = "";
    this.code = "";
  }

  ngOnInit(): void {
  }

  forgetPass(){
    console.log(this.email);
    console.log(this.code);
  }

}
