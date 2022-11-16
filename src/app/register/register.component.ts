import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: String;
  aPaterno: String;
  aMaterno: String;
  rfc: String;
  email: String;
  emailC: String;
  password: String;
  passwordC: String;

  constructor() { 
    this.nombre = "";
    this.aPaterno = "";
    this.aMaterno = "";
    this.rfc = "";
    this.email = "";
    this.emailC = "";
    this.password = "";
    this.passwordC = "";
  }

  ngOnInit(): void {
  }

  register () {
    alert("Estimado: "+this.nombre+" "+ this.aPaterno+" "+this.aMaterno + " sus datos fueron capturados correctamente")
  }

}
