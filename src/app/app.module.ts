import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { PanelPrincipalComponent } from './Components/panel-principal/panel-principal.component';
import { CotizacionesComponent } from './Components/cotizaciones/cotizaciones.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './Components/footer/footer.component';
import { ServiciosActualesComponent } from './Components/servicios-actuales/servicios-actuales.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    ClientesComponent,
    PanelPrincipalComponent,
    CotizacionesComponent,
    LoginComponent,
    FooterComponent,
    ServiciosActualesComponent,
    PerfilComponent,
    NavegacionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
