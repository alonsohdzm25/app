import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sni',
  templateUrl: './sni.component.html',
  styleUrls: ['./sni.component.css']
})
export class SNIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
aceptar(){
}
siguiente(){
  window.location.href="/estancias"
}
}
