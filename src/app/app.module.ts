import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { MatIcon } from '@angular/material/icon';
import { NuevoPedidoComponent } from './pages/pedido/nuevo-pedido/nuevo-pedido.component';
import { DetallerPedidoComponent } from './pages/pedido/detaller-pedido/detaller-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    InicioComponent,
    PedidoComponent,
    NuevoPedidoComponent,
    DetallerPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    UpperCasePipe,
    DatePipe,
    MatIcon
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
