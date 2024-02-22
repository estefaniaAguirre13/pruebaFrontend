import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NuevoPedidoComponent } from './pages/pedido/nuevo-pedido/nuevo-pedido.component';
import { DetallerPedidoComponent } from './pages/pedido/detaller-pedido/detaller-pedido.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'pedidos', component:PedidoComponent},
  {path:'nuevo/pedido', component:NuevoPedidoComponent},
  {path:'detalle/:id', component:DetallerPedidoComponent},
  {path:'**',pathMatch:'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
