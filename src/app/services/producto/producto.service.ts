import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto/producto';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) { }

  //GET
  public obtenerProductos():Observable<any>{
      
    return this.httpClient.get('http://localhost:3000/api/producto');
  }


  //POST
  public crearProducto(objeto:Producto):Observable<any>{

    return this.httpClient.post('http://localhost:3000/api/producto/', objeto);
  }

  


}

