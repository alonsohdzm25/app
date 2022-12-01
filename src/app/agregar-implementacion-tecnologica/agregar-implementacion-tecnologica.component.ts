import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-implementacion-tecnologica',
  templateUrl: './agregar-implementacion-tecnologica.component.html',
  styleUrls: ['./agregar-implementacion-tecnologica.component.css']
})
export class AgregarImplementacionTecnologicaComponent implements OnInit {
  tipo:string;
  nombre:string;
  numero:string;
  fecha:string;

  constructor() { 
    this.tipo="";
    this.nombre="";
    this.numero="";
    this.fecha="";
  }

  ngOnInit(): void {
  }
guardar(){

}
next(){

}
}
