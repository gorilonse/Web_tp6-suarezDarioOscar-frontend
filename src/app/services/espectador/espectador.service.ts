import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Espectador } from '../../models/espectador/espectador';


@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  constructor(private _http:HttpClient) { }

  //GET  mostrar todos
  public obtenerEspectadorres():Observable<any>{
    return this._http.get('http://localhost:3000/api/espectador/');
  }

}
