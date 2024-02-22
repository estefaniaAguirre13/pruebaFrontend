import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidoService } from '../../../services/pedido.service';
import { Pedido } from '../../../interfaces/pedido';

@Component({
  selector: 'app-detaller-pedido',
  templateUrl: './detaller-pedido.component.html',
  styleUrl: './detaller-pedido.component.css'
})
export class DetallerPedidoComponent implements OnInit {

    model: any = {
    idPlan: 1,
    idCliente: '',
    idProducto: '',
    idLogistica: '',
    idVehiculo: '',
    idCiudad: '',
    idCentro: '',
    cantidad: '',
    costoEnvio: '',
    costoPagar: '',
    fechaRegistro: '',
    fechaEntrega: '',
    guia: ''
  };
  pedido: Pedido[] = [];
  id!: number;

  constructor(
    private pedidoSvc: PedidoService,
    private activatedRoute: ActivatedRoute
  )
  {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.pedidoSvc
    .getPedidos().subscribe({
      next: (data: Pedido[]) => {
        this.pedido = data;
        this.model = this.pedido.find((m) => m.idPlan == this.id)!;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
    this.pedidoSvc.getPedidos()
    .subscribe(data => {
      this.pedido = data;
    })
  }
}
