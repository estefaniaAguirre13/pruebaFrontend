import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'http://localhost:9000/logistica/clientes';

constructor(private http: HttpClient) { }

getClients(): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(`${this.url}/all`)
}

getUserByIdentification(identificacion: number): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(`${this.url}/by/${identificacion}`);
}
}
