import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-grados-academicos',
  templateUrl: './agregar-grados-academicos.component.html',
  styleUrls: ['./agregar-grados-academicos.component.css']
})
export class AgregarGradosAcademicosComponent implements OnInit {
  titulo:string;
  institucion:string;

  constructor() {
    this.titulo="";
    this.institucion="";
   }

  ngOnInit(): void {
  }
  guardar(){

  }
  next(){
    
  }

}
