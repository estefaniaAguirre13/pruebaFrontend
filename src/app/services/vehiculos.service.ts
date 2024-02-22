import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = 'http://localhost:9000/logistica/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/all`)
  }

  getVehiculoByPlacaVehiculo(placaVehiculo: string): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/by/${placaVehiculo}`);
  }

  getVehiculoByLogistica(idLogistica: number): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/byLogistica/${idLogistica}`);
  }

}
