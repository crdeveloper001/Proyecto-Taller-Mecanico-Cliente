import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  StateEditProfileCard: boolean = false;
  StateProfileViewOnly: boolean = true;

  constructor() { }

  async ShowEditView() {

    switch (this.StateEditProfileCard) {
      case false:
        this.StateEditProfileCard = true;
        this.StateProfileViewOnly = false;
        break;
      case true:
        this.StateEditProfileCard = false;
        break;
      default:
        this.StateEditProfileCard = false;
    }

  }

  async CloseEditView() {

    switch (this.StateEditProfileCard) {
      case true:
        this.StateEditProfileCard = false;
        this.StateProfileViewOnly = true;
        break;
    }

  }


  ngOnInit(): void {
  }

}
