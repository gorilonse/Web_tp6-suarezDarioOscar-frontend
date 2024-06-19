import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../../services/producto/producto.service';
import { Producto } from '../../../models/producto/producto';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.css'
})
export class ListaProductoComponent {
  //ATRIBUTOS
  productos01: Array<Producto>;
  producto01:Producto;
  //CONSTRUCTOR
  constructor(private productoService: ProductoService) {
    this.productos01 = new Array<Producto>();
    this.producto01 = new Producto();
    this.obtenerProductos();
  }

  //METODOS
  obtenerProductos():void{
    this.productoService.obtenerProductos().subscribe(
      (ultado:any)=>{
        this.productos01=ultado;
        console.log("MI OBJETO");
        console.log(ultado);
      },(error:any)=>{
        console.log(error);
      }
    )

  }

}
