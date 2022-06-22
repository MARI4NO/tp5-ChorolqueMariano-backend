import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private baseURL = 'http://localhost:3000/api/transaccion'

  constructor(private http: HttpClient) { }

  obtenerTransacciones():Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(this.baseURL+'/recuperar', options)
  }

  filtrarTransacciones(origen: string, destino: string):Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(this.baseURL + '/recuperarDivisa/'+origen+'/'+destino, options)
  }

  crearTransaccion(transaccion: Transaccion):Observable<any> {
    const options = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    const body = JSON.stringify(transaccion)
    return this.http.post(this.baseURL + '/crear', body, options)
  }
}
