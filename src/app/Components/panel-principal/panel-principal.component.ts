import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  StateMenu: boolean = false;
  ButtonStateChange: string = "habilitar navegacion";

  constructor() { }



  ChangeStateMenu() {

    switch (this.StateMenu) {

      case true:
        this.StateMenu = false;
        this.ButtonStateChange = "HABILITAR NAVEGACION"
        break;

      case false:
        this.StateMenu = true;
        this.ButtonStateChange = "DESHABILITAR NAVEGACION"
        break;

      default:
        this.StateMenu = true;
    }


  }

  ngOnInit(): void {
  }

}
