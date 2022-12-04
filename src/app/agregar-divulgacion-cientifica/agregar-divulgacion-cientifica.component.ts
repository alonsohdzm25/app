import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-divulgacion-cientifica',
  templateUrl: './agregar-divulgacion-cientifica.component.html',
  styleUrls: ['./agregar-divulgacion-cientifica.component.css']
})
export class AgregarDivulgacionCientificaComponent implements OnInit {
  nombre:string;
  autor:string;
  revista:string;
  fecha:string;
  termino:string;

  constructor() {
    this.nombre="";
    this.autor="";
    this.revista="";
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
