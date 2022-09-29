import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  constructor(private router: Router) { }



  //navigation
  async ViewPerfilPersonal() {
    this.router.navigateByUrl('/Perfil-Personal')
  }
  async ViewClientes() {
    this.router.navigateByUrl('/Clientes')
  }
  async ViewVehiculos(){
    this.router.navigateByUrl('/Vehiculos')
  }
  async ViewDiagnosticos() {
    this.router.navigateByUrl('/Diagnosticos')
  }
  async ViewProveedores() {
    this.router.navigateByUrl('/Proveedores')
  }
  async ViewCotizaciones(){
    this.router.navigateByUrl('/Cotizacioness')
  }
  async ViewInventario(){
    this.router.navigateByUrl('/Inventario')
  }
 


  ngOnInit(): void {
  }

}
