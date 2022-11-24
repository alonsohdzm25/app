import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rfc: string;
  password: string;

  constructor() {
    this.rfc = "";
    this.password = "";
   }

  ngOnInit(): void {
  }

  login(){
    alert("Click Boton Login");
  }

}
