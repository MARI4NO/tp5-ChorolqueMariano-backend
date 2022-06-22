import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  private baseURL = 'http://localhost:3000/api/pasaje'
  constructor(private http:HttpClient) { }

  obtenerPasajes():Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get(this.baseURL+'/recuperar', options)
  }

  filtrarPasajes(categoria: string):Observable<any> {
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {
        categoria:categoria
      }
    }
    return this.http.get(this.baseURL + '/recuperarCategoria', options)
  }

  eliminarPasaje(id:string):Observable<any> {
    const options = {
      method: 'DELETE',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.delete(this.baseURL+'/eliminar/'+id, options)
  }

  guardarPasaje(pasaje:Pasaje):Observable<any> {
    const options = {
      method: 'POST',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    let body=JSON.stringify(pasaje)
  
    return this.http.post(this.baseURL+'/crear',body, options)
  }

  obtenerPersonas():Observable<any>{
    const options = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.http.get('http://localhost:3000/api/persona/recuperar/', options)
  }

  editarPasaje(actualizar:Pasaje):Observable<any>{
    const options = {
      method: 'PUT',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    const body = JSON.stringify(actualizar)
    console.log(body)
    return this.http.put(this.baseURL+'/actualizar',body, options)
  }

  obtenerPasaje(id: string): Observable<any> {
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    }
    return this.http.get(this.baseURL + '/recuperar/' + id, options)
  }
}
