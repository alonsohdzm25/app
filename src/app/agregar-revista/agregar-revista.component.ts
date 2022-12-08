import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-revista',
  templateUrl: './agregar-revista.component.html',
  styleUrls: ['./agregar-revista.component.css']
})
export class AgregarRevistaComponent implements OnInit {
  titulo: string;
  autor: string;
  fecha: string;
  aceptacion: string;
  nombre: string;

  constructor() { 
    this.titulo= "";
    this.autor= "";
    this.fecha= "";
    this.aceptacion= "";
    this.nombre= "";
  }

  ngOnInit(): void {
  }
  guardar(){
  }
  next(){
  }

}
