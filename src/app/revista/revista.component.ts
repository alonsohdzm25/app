import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
aceptar(){

}
siguiente(){
  window.location.href="/divulgacion-cientifica"
}
}
