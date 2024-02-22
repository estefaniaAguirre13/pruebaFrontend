import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private url = 'http://localhost:9000/logistica/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/all`)
  }

  getPedidoByCliente(idCliente: number): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/by/${idCliente}`)
  }

  getPedidoByGuia(guia: string): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/byPedido/${guia}`)
  }

  savePedidos(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.url}/save`, pedido);
  }

  deletePedido(id: number){
    return this.http.delete(`${this.url}/delete/${id}`)
  }

  updatePedidos(pedido: Pedido, id: number):Observable<Pedido>{
    return this.http.put<Pedido>(`${this.url}/update/${id}`, pedido);
  }
}
