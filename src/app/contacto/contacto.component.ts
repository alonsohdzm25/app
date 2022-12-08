import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  email: String;
  emailInst: String;
  phone: String;
  movil: String;
  institucion: String;
  adscipcion: String;
  
  constructor() {
    this.email = "";
    this.emailInst = "";
    this.phone = "";
    this.movil = "";
    this.institucion = "";
    this.adscipcion = "";
   }

  ngOnInit(): void {
  }

  guardar() {

  }
  next() {
    window.location.href="/desarrollo"
  }
}