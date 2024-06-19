import { Component } from '@angular/core';
import { Producto } from '../../../models/producto/producto';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../../services/producto/producto.service';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  //ATRIBUTOS
  obProducto:Producto;


  //CONSTRUCTOR
  constructor(private productoService:ProductoService){
    this.obProducto=new Producto();
  }

  //METODOS
  crearProducto():void{ //POST
    this.productoService.crearProducto(this.obProducto).subscribe(
      (ultado:any)=>{
        console.log(this.obProducto);
        console.log("Resultado de CREAR producto");
        console.log(ultado);
        this.obProducto=new Producto();
      }
    );
  }



}
