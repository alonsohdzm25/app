import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divulgacion-cientifica',
  templateUrl: './divulgacion-cientifica.component.html',
  styleUrls: ['./divulgacion-cientifica.component.css']
})
export class DivulgacionCientificaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
aceptar(){
}
siguiente(){
window.location.href="/implementacion-tecnologica"
}
}
