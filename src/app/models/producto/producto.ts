export class Producto {
    _id!:string;
    nombre:String;
    descripcion:String;
    imagen:String;
    precio:number;
    stock:number;
    destacado:Boolean;
    
    
    //CONSTRUCTOR
    
    constructor(){
            this.nombre="";
            this.descripcion="";
            this.imagen="";
            this.precio=0;
            this.stock=0;
            this.destacado=false;
        }
    }
    