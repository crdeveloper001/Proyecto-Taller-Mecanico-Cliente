import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  StateViewRegisterForm:boolean = false;
  constructor() { }

  async ViewForm(){

    switch(this.StateViewRegisterForm){
      default:
        this.StateViewRegisterForm = false;
        break;
      case false:
        this.StateViewRegisterForm = true;
        break;
      
    }
  }

  async SendInfo(){
    alert("registrado")
  }

  ngOnInit(): void {
  }

}
