import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket/ticket';
import { Router } from '@angular/router';
import { Espectador } from '../../../models/espectador/espectador';
import { EspectadorService } from '../../../services/espectador/espectador.service';


@Component({
  selector: 'app-alta-ticket',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './alta-ticket.component.html',
  styleUrl: './alta-ticket.component.css'
})
export class AltaTicketComponent {


  //ATRIBUTO
  auxEspectador:string;
  auxPrecio:number;
  obTicket:Ticket;
  listaEspectadores:Array<Espectador>;
  constructor(private ticketService:TicketService,private router:Router, private espectadorService:EspectadorService) {
    this.auxEspectador="";
    this.auxPrecio=0;
    this.obTicket=new Ticket();
    this.listaEspectadores=new Array<Espectador>();
    this.obtenerEspestadores();
  }
      crearTicket():void{ //POST
        this.ticketService.crearTicket(this.obTicket).subscribe(
          (ultado:any)=>{
            this.obTicket=new Ticket();
          }
        )
      }

      
      obtenerEspestadores():void{
        this.espectadorService.obtenerEspectadorres().subscribe(
          (ultado:any)=>{
            this.listaEspectadores=ultado;
          }
        )
      }



      cargarVentasEntabla():void{
        this.router.navigate(['p5ListaDeVentasComponentt']);
       }
}
