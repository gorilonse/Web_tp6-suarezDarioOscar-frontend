import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../../models/ticket/ticket';
import { Espectador } from '../../models/espectador/espectador';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  //GET
  public obtenetTickets():Observable<any>{
    return this._http.get('http://localhost:3000/api/ticket/');
  }


  //DELETE
  public eliminarTicket(id:string):Observable<any>{
    return this._http.delete('http://localhost:3000/api/ticket/'+id);
  }

  //POST AGREGAR
  public crearTicket(ticket:Ticket):Observable<any>{
    return this._http.post('http://localhost:3000/api/ticket/',ticket);
  }

  //MODIFICAR PUT
  public modificarTicket(id:string,ticket:Ticket):Observable<any>{
    return this._http.put('http://localhost:3000/api/ticket/'+id,ticket);

  }

  //GET obtener la lista de ticket pero filtrada por Categoria de Espectador
  public obtenerEspectadoresPorCategoria(categoria:string):Observable<any>{
    return this._http.get('http://localhost:3000/api/ticket/'+categoria);

  }


}
