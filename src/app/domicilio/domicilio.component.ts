import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {
  numero: string;
  calle: string;
  cp:string;

  constructor() { 
    this.numero = "";
    this.calle="";
    this.cp="";
    
  }

  ngOnInit(): void {
  }
  guardar(){

  }
  next(){
       window.location.href="/contacto"
  }

}
