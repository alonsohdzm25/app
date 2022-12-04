import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-estancias',
  templateUrl: './agregar-estancias.component.html',
  styleUrls: ['./agregar-estancias.component.css']
})
export class AgregarEstanciasComponent implements OnInit {
   institucion:string;
   proyecto:string;
   fecha:string;
   termino:string;

  constructor() {
    this.institucion="";
    this.proyecto="";
    this.fecha="";
    this.termino="";
   }

  ngOnInit(): void {
  }
  guardar(){

  }
  next(){
    
  }
}
