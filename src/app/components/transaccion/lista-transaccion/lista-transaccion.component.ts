import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaccion } from '../../../models/transaccion/transaccion';
import { TransaccionService } from '../../../services/transaccion/transaccion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-transaccion',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-transaccion.component.html',
  styleUrl: './lista-transaccion.component.css'
})
export class ListaTransaccionComponent {
  //ATRIBUTO
  listaTransaccion:Array <Transaccion>;
  obTransaccion:Transaccion;

  //CONSTRUCTOR
  constructor (private transaccionService: TransaccionService){
    this.listaTransaccion = new Array<Transaccion>();
    this.obtenerTransacciones();
    this.obTransaccion = new Transaccion();
  }

  //METODOS
  obtenerTransacciones():void{ //Obtener todos
    this.transaccionService.obtenerTransaccion().subscribe(
      (ultado:any)=>{
        this.listaTransaccion=ultado;
        console.log("MI OBJETO");
        console.log(ultado);
        console.log(this.listaTransaccion);
      }
    )
  }

  obtenerTransaccionesCon2Filtros():void{//Obtener solo algunos
    this.transaccionService.obtenerTransaccionCon2Filtros(this.obTransaccion.monedaOrigen,this.obTransaccion.monedaDestino).subscribe(
      (ultado:any)=>{
        this.listaTransaccion=ultado;
        console.log("MI OBJETO");
        console.log(ultado);
        console.log(this.listaTransaccion);
      }
    )
  }

  


}
