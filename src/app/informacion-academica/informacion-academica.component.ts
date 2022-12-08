import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-academica',
  templateUrl: './informacion-academica.component.html',
  styleUrls: ['./informacion-academica.component.css']
})
export class InformacionAcademicaComponent implements OnInit {
  institucion: string;
  titulo: string;

  constructor() { 
    this.institucion= "";
    this.titulo= "";
  }

  ngOnInit(): void {
  }
aceptar(){
}
cancelar(){
}
}
