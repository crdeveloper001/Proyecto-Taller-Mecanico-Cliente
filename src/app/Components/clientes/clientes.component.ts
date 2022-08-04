import { Component, OnInit } from '@angular/core';

//js for modal trigger
declare function ModalTrigger():any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    ModalTrigger();
  }

}
