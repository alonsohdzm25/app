import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-libros',
  templateUrl: './agregar-libros.component.html',
  styleUrls: ['./agregar-libros.component.css']
})
export class AgregarLibrosComponent implements OnInit {
  titulo: string;
  autor: string;
  editorial: string;
  referencia: string;

  constructor() { 
    this.titulo="";
    this.autor="";
    this.editorial="";
    this.referencia="";
  }

  ngOnInit(): void {
  }
  guardar(){

  }
  next(){

  }

}
