import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obtencion-grados',
  templateUrl: './obtencion-grados.component.html',
  styleUrls: ['./obtencion-grados.component.css']
})
export class ObtencionGradosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregar(){

  }
next(){
  window.location.href="/sni"
}
}
