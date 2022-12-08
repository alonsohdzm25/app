import { Component, OnInit } from '@angular/core';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-agregar-obtencion-grados',
  templateUrl: './agregar-obtencion-grados.component.html',
  styleUrls: ['./agregar-obtencion-grados.component.css']
})
export class AgregarObtencionGradosComponent implements OnInit {
  nombre:string;
  institucion:string;

  constructor() { 
    this.nombre="";
    this.institucion="";
  }

  ngOnInit(): void {

    }
    guardar(){

    }
    next(){
      
    }
  }


