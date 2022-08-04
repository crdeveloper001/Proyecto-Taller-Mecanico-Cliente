import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Components/clientes/clientes.component';
import { LoginComponent } from './Components/login/login.component';
import { PanelPrincipalComponent } from './Components/panel-principal/panel-principal.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';

const routes: Routes = [

  {path:'Panel-Principal',component:PanelPrincipalComponent},
  {path:'Vehiculos',component:VehiculosComponent},
  {path:'Clientes',component:ClientesComponent},
  {path:'Login',component:LoginComponent},
  {path:'**',redirectTo:'/Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
