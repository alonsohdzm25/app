import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protectos-de-investigacion',
  templateUrl: './protectos-de-investigacion.component.html',
  styleUrls: ['./protectos-de-investigacion.component.css']
})
export class ProtectosDeInvestigacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  aceptar(){

  }
  siguiente(){
    window.location.href="/patentes"

  }

}
