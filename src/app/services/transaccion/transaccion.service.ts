import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from '../../models/transaccion/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: HttpClient) { }


  //GET mostrar todos
  public obtenerTransaccion():Observable<any>{
      
    return this._http.get('http://localhost:3000/api/transaccion/');
  }


  //POST
  public crearTransaccion(objeto:Transaccion):Observable<any>{

    return this._http.post('http://localhost:3000/api/transaccion/', objeto);
  }

  //GET para API Parametrizado
  public obtenerTazaConversion(from:string, to:string, amount:number):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
        'x-rapidapi-key': '8a7043706bmsh432cc2e10a87ac7p19e089jsnf19e84facac3',
        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }),
      params:new HttpParams()
      .append('from',from)
      .append('to',to)
      .append('amount',amount)
            };
    return this._http.get('https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',httpOptions);
  }


  //GET
  public obtenerTransaccionCon2Filtros(origen:String,destino:String):Observable<any>{
      
    return this._http.get('http://localhost:3000/api/transaccion/'+origen+','+destino);
  }



  


//A MODO MODELOSSS

  //GET para la API
  public buscarCancionApi(cancionBuscada:string):Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
        'x-rapidapi-key': '8a7043706bmsh432cc2e10a87ac7p19e089jsnf19e84facac3',
        'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
      })
    }
    return this._http.get('https://youtube-v2.p.rapidapi.com/search/?query='+cancionBuscada,httpOptions);
  }
   



    //GET 
    //Parametrizado
    public obtenerDatosGET(aux1:string):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({
          'X-RapidAPI-Key': '6fcb75de8cmsh935e828e26aa454p1f341ejsn21c3bd2fd9e6',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }),
        params:new HttpParams()
        .append('atributo de API',aux1)
              };
      return this._http.get('https://hapi-books.p.rapidapi.com/week/horror/10',httpOptions);
    }
    //GET SIN parametros
    public obtenerDatosGETDOS(aux1:string):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({
          'X-RapidAPI-Key': '6fcb75de8cmsh935e828e26aa454p1f341ejsn21c3bd2fd9e6',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }),
        params:new HttpParams()
        .append('atributo de API',aux1)
              };
      return this._http.get('https://hapi-books.p.rapidapi.com/book/56597885',httpOptions);
    }

    //POST 
    public devolverBuscadoPOST(aux3:string):Observable<any>{
      const httpOptions = {
        headers:new HttpHeaders({
          'x-rapidapi-key': '8a7043706bmsh432cc2e10a87ac7p19e089jsnf19e84facac3',
          'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
        })
      };
      //const body=new HttpParams().set('ip',aux3); // Content-Type': 'application/x-www-form-urlencoded'
      const body=JSON.stringify({ip:aux3}) //Content-Type': 'application/json'
      return this._http.post('https://hapi-books.p.rapidapi.com/week/horror/10',body,httpOptions);
    }


}
