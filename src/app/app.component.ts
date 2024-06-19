import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListaProductoComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp6-suarezDarioOscar-frontend';
}
