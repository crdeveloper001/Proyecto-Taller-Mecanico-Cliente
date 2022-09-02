import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  StateMenu: boolean = false;
  ButtonStateChange: string = "habilitar navegacion";

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

  constructor() { }

  ngOnInit(): void {
  }

}
