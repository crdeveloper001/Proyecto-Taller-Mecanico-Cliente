import { Component, OnInit } from '@angular/core';

//js for modal trigger
declare function ModalTrigger(): any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

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

  ngOnInit() {


  }

}
