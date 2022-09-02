import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  constructor(private router:Router) { }



  //navigation
  async ViewPersonlProfile(){

    this.router.navigateByUrl('/Perfil-Personal')
  }


  ngOnInit(): void {
  }

}
