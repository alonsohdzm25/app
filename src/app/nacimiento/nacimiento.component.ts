import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nacimiento',
  templateUrl: './nacimiento.component.html',
  styleUrls: ['./nacimiento.component.css']
})
export class NacimientoComponent implements OnInit {
  cp: string;
  pais: string;
  estado: string;
  ciudad: string;
  nacimiento: string;
  extranjero: string;


  constructor() { 
    this.cp = "";
    this.pais = "";
    this.estado = "";
    this.ciudad = "";
    this.nacimiento = "";
    this.extranjero = "";

  }

  ngOnInit(): void {
  }
  guardar(){

  }
  siguiente(){
    
  }
}
