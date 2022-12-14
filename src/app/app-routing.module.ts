import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { CotizacionesComponent } from './Components/cotizaciones/cotizaciones.component';
import { DiagnosticosComponent } from './Components/diagnosticos/diagnosticos.component';
import { InventarioComponent } from './Components/inventario/inventario.component';
import { LoginComponent } from './Components/login/login.component';
import { PaginaPrincipalComponent } from './Components/pagina-principal/pagina-principal.component';
import { PanelPrincipalComponent } from './Components/panel-principal/panel-principal.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { ProveedoresComponent } from './Components/proveedores/proveedores.component';
import { ServiciosActualesComponent } from './Components/servicios-actuales/servicios-actuales.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';

const routes: Routes = [

  {path:'Home',component:PaginaPrincipalComponent},
  {path:'Servicios',component:ServiciosActualesComponent},
  {path:'Taller-ERP-Login',component:LoginComponent},
  {path:'Panel-Principal',component:PanelPrincipalComponent},
  {path:'Vehiculos',component:VehiculosComponent},
  {path:'Clientes',component:ClientesComponent},
  {path:'Proveedores',component:ProveedoresComponent},
  {path:'Login',component:LoginComponent},
  {path:'Cotizaciones',component:CotizacionesComponent},
  {path:'Perfil-Personal',component:PerfilComponent},
  {path:'Diagnosticos',component:DiagnosticosComponent},
  {path:'Inventario',component:InventarioComponent},
  {path:'**',redirectTo:'/Home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
