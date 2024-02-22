import { Pedido } from './../../../interfaces/pedido';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Logistica } from '../../../interfaces/logistica';
import { Producto } from '../../../interfaces/producto';
import { Cliente } from '../../../interfaces/cliente';
import { Vehiculo } from '../../../interfaces/vehiculo';
import { Ciudad } from '../../../interfaces/ciudad';
import { Almacen } from '../../../interfaces/almacen';
import { PedidoService } from '../../../services/pedido.service';
import { ProductosService } from '../../../services/productos.service';
import { LogisticasService } from '../../../services/logisticas.service';
import { ClientesService } from '../../../services/clientes.service';
import { VehiculosService } from '../../../services/vehiculos.service';
import { CiudadesService } from '../../../services/ciudades.service';
import { AlmacenesService } from '../../../services/almacenes.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrl: './nuevo-pedido.component.css'
})
export class NuevoPedidoComponent implements OnInit {

  hide = true;
  model: any = { idPlan: 0, idCliente: '', idLogistica: '', idProducto: '', idVehiculo: '', idCiudad: '', idCentro: '', cantidad: '' };
  pedido: Pedido[] = [];
  logistica!: Logistica[];
  producto!: Producto[];
  cliente!: Cliente[];
  vehiculo!: Vehiculo[];
  ciudad!: Ciudad[];
  almacen!: Almacen[];

  idLogistica!: number;
  idCiudad!: number;

  id!: number;
  isEdit: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private router: Router,
    private pedidoSvc: PedidoService,
    private productSvc: ProductosService,
    private logisticaSvc: LogisticasService,
    private clienteSvc: ClientesService,
    private vehiculoSvc: VehiculosService,
    private ciudadSvc: CiudadesService,
    private almacenSvc: AlmacenesService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.logisticaSvc.getLogistica()
      .subscribe(data => {
        this.logistica = data;
      })

      this.productSvc.getProducts()
      .subscribe(data => {
        this.producto = data;
      })

    this.pedidoSvc.getPedidos()
      .subscribe(data => {
        this.pedido = data;
      })

    this.clienteSvc.getClients()
      .subscribe(data => {
        this.cliente = data;
      })

    this.ciudadSvc.getCiudad()
      .subscribe(data => {
        this.ciudad = data;
      })
  }

  onSave({ value: formData }: NgForm): void {
    const data = {
      ...formData
    }
    this.pedidoSvc.savePedidos(data)
      .pipe(
        tap(res => console.log('Pedido =>', res)),
        tap(() => this.snackBar.open('Pedido Creado', 'OK', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })),
        tap(() => this.router.navigate(['/pedidos']))
      )
      .subscribe({
        next: data => {},
        error: err => {
          this.snackBar.open(err.error, 'Fail', {
            duration: 4*1000, horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
      });
  }


  cargarElementByLogistica() {

    this.idLogistica = this.model.idLogistica.idLogistica;

    this.productSvc.getProductByLogistica(this.idLogistica).subscribe(data => {
      this.producto = data;
    },
      error => { console.error(error) })

    this.vehiculoSvc.getVehiculoByLogistica(this.idLogistica).subscribe(data => {
      this.vehiculo = data;
    },
      error => { console.error(error) })

  }

  cargarAlmacenByCiudad() {

    this.idCiudad = this.model.idCiudad.id;

    this.almacenSvc.getUserByAlmacenLogisticaCiudad(this.idLogistica, this.idCiudad).subscribe(data => {
      this.almacen = data;
    },
      error => { console.error(error) })

  }

}

