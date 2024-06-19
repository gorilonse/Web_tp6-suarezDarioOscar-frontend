import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../../models/ticket/ticket';
import { TicketService } from '../../../services/ticket/ticket.service';
import { EspectadorService } from '../../../services/espectador/espectador.service';
import { Espectador } from '../../../models/espectador/espectador';

@Component({
  selector: 'app-lista-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-ticket.component.html',
  styleUrl: './lista-ticket.component.css'
})
export class ListaTicketComponent {
//ATRIBUTO
listaTicket:Array<Ticket>;
obTicket:Ticket;
listaEspectadores:Array<Espectador>;
categoriaEspectador:string;

//CONSTRUCTOR
constructor(private ticketService:TicketService, private espectadorService:EspectadorService){
  this.listaTicket=new Array<Ticket>();
  this.obTicket=new Ticket();
  this.categoriaEspectador="";
  this.obtenerTickets();
  this.listaEspectadores=new Array<Espectador>();
  this.obtenerEspestadores();
}

//METODOS
//Obtener todos los tickets
obtenerTickets():void{
  this.ticketService.obtenetTickets().subscribe(
    (ultado:any)=>{
      this.listaTicket=ultado;
      console.log("MI OBJETO");
      console.log(ultado);
      console.log(this.listaTicket);
    }
  )
}

//eliminar un ticket
eliminarUnTicket(id:string):void{
  this.ticketService.eliminarTicket(id).subscribe(
    (ultado:any)=>{
      console.log("Se eliminara:" +id);
      console.log("Ticket Eliminado");
      this.obtenerTickets(); 
    }

  )
}

//Obtener ticket para Modal
obtenerTicketsParaModal(ticket:Ticket):void{
  this.obTicket=ticket;
  
}

//
modificarTicket(id:string, ticket:Ticket):void{ //Modificar Ticket
  this.ticketService.modificarTicket(id,ticket).subscribe(
    (ultado:any)=>{
      this.obtenerTickets();
    }
  )
}



obtenerEspestadores():void{ //obtener Espesctadores
  this.espectadorService.obtenerEspectadorres().subscribe(
    (ultado:any)=>{
      this.listaEspectadores=ultado;
    }
  )
}

obtenerTicketPorCategoriaDeEspec():void{ // me trae la lista de ticket filtrada por la categoria de espectador
  this.ticketService.obtenerEspectadoresPorCategoria(this.categoriaEspectador).subscribe(
    (ultado:any)=>{
      this.listaTicket=ultado; //mi lista fitlrada
    }
  )
}

}
