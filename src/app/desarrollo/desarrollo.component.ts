import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
  }
  next(){
    window.location.href='/formacion-academica';
  }

}
