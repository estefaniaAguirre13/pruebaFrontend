import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Almacen } from '../interfaces/almacen';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {

  private url = 'http://localhost:9000/logistica/almacenes';

  constructor(private http: HttpClient) { }

  getAlmacens(): Observable<Almacen[]>{
    return this.http.get<Almacen[]>(`${this.url}/all`)
  }

  getUserByNameAlmacen(nameAlmacen:string): Observable<Almacen[]>{
    return this.http.get<Almacen[]>(`${this.url}/by/${nameAlmacen}`);
  }

  getUserByAlmacenLogisticaCiudad(idLogistica: number, idCiudad: number): Observable<Almacen[]>{
    return this.http.get<Almacen[]>(`${this.url}/byAlmacen/${idLogistica}_${idCiudad}`);
  }

}
