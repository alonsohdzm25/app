import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-patentes',
  templateUrl: './agregar-patentes.component.html',
  styleUrls: ['./agregar-patentes.component.css']
})
export class AgregarPatentesComponent implements OnInit {
  tipo: string;
  nombre: string;
  registro:string;
  fecha:string;
  referencia:string;

  constructor() { 
    this.tipo="";
    this.nombre="";
    this.registro="";
    this.fecha="";
    this.referencia="";
  }

  ngOnInit(): void {
  }
  guardar(){

  }
  next(){

  }

}
