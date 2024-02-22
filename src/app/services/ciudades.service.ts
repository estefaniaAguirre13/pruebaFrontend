import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private url = 'http://localhost:9000/logistica/ciudades';

  constructor(private http: HttpClient) { }

  getCiudad(): Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(`${this.url}/all`)
  }

}
