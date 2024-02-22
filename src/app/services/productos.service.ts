import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productInit = new Subject<Producto[]>;

  private url = 'http://localhost:9000/logistica/productos';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`http://localhost:9000/logistica/productos/all`)
  }

  getProductByNameProduct(nameProduct:string): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/by/${nameProduct}`);
  }

  getProductByLogistica(idLogistica:number): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/byLogistica/${idLogistica}`);
  }
}
