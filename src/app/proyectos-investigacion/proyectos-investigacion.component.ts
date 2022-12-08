import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos-investigacion',
  templateUrl: './proyectos-investigacion.component.html',
  styleUrls: ['./proyectos-investigacion.component.css']
})
export class ProyectosInvestigacionComponent implements OnInit {
  referencia:string;
  titulo:string;
  particion:string;
  fecha:string;
  termino:string;
  institucion:string;
  asociaciones:string;
  monto:string;
  usuario:string;

  constructor() { 
    this.referencia="";
    this.titulo="";
    this.particion="";
    this.fecha="";
    this.termino="";
    this.institucion="";
    this.asociaciones="";
    this.monto="";
    this.usuario="";


  }

  ngOnInit(): void {
  }
  guardar(){

  }
  next(){

  }

}
