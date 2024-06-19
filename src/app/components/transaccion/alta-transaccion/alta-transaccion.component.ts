import { Component } from '@angular/core';
import { Transaccion } from '../../../models/transaccion/transaccion';
import { FormsModule } from '@angular/forms';
import { TransaccionService } from '../../../services/transaccion/transaccion.service';

@Component({
  selector: 'app-alta-transaccion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-transaccion.component.html',
  styleUrl: './alta-transaccion.component.css'
})
export class AltaTransaccionComponent {
  //ATRIBUTO
  obTransaccion: Transaccion;

  origen:string;
  destino:string;
  monto:number;
  taza:number;
  listaDeTazas:Array<string>;

  //CONSTRUCTOR
  constructor(private transaccionService: TransaccionService) {
    this.obTransaccion = new Transaccion();
    this.origen="";
    this.destino="";
    this.monto=1;
    this.taza=1;
    this.listaDeTazas=new Array<string>();
  }

  //METODOS
  crearTransaccion(): void { //POST
    this.transaccionService.crearTransaccion(this.obTransaccion).subscribe(
      (ultado: any) => {
        console.log(this.obTransaccion);
        console.log("Resultado de CREAR transaccion");
        console.log(ultado);
        this.obTransaccion = new Transaccion();
      }
    )}


     //GET optener tazas de conversiones
     obteberTazasDeConversiones():void{
      this.transaccionService.obtenerTazaConversion(this.obTransaccion.monedaOrigen,this.obTransaccion.monedaDestino,this.obTransaccion.cantidadOrigen).subscribe(
        (ultado:any)=>{
          this.obTransaccion.cantidadDestino=ultado.result;
          this.obTransaccion.tasaConversion=ultado.info.rate;
          this.crearTransaccion();

          
        }
      )
     }


  }

