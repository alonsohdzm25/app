import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 aceptar(){

 }
 siguiente(){
  window.location.href="/coautoria-de-libros()"
 }
}
