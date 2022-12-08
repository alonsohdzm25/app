import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-data',
  templateUrl: './general-data.component.html',
  styleUrls: ['./general-data.component.css']
})
export class GeneralDataComponent implements OnInit {
  nombre: string;
  apellido: string;
  apellidom: string;
  rfc: string;
  curp: string;

  constructor() { 
    this.nombre="";
    this.apellido="";
    this.apellidom="";
    this.rfc="";
    this.curp="";
  }

  ngOnInit(): void {
    
  }
    guardar(){

    }
     
   next(){
    window.location.href="/lugar-nacimiento"
    
   }
}
