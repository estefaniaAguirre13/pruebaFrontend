import { Component, OnInit, ViewChild } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../interfaces/pedido';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit {

  pedidos!: Pedido[];
  isSearch: boolean = false;
  search: string=  '';
  dataSource!: MatTableDataSource<Pedido>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;


  constructor
  (
    private pedidoSvc: PedidoService,
    private _router:Router
  ){}

  ngOnInit(): void {
    this.list()
  }

  list(){
    this.pedidoSvc.getPedidos().subscribe(resp => {
      if(resp){
        this.pedidos = resp;
      }
    })
  }

  onDelete(id: number): void {
    this.pedidoSvc.deletePedido(id)
      .subscribe(() => {
        this.pedidoSvc.getPedidos()
          .subscribe(data => {
            this.list()
          });
      });
  }

  verDetalle(id:number){
    this._router.navigate( ['/detalle',id] );
  }
}
