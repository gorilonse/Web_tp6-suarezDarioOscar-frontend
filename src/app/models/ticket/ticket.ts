import { Espectador } from "../espectador/espectador";


export class Ticket {
    //ATRIBUTOS
    _id!:string;
    precioTicket:number;
    categoriaEspectador:string;
    fechaCompra:string;
    espectador:Espectador;

    //CONSTRUCTOR
    
    constructor(){
            this.precioTicket = 0;
            this.categoriaEspectador = "";
            this.fechaCompra = "";
            this.espectador = new Espectador();
        }
}
