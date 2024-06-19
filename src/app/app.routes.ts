import { Routes } from '@angular/router';
import { AltaProductoComponent } from './components/producto/alta-producto/alta-producto.component'; 
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { AltaTransaccionComponent } from './components/transaccion/alta-transaccion/alta-transaccion.component';
import { ListaTransaccionComponent } from './components/transaccion/lista-transaccion/lista-transaccion.component';
import { AltaEspectadorComponent } from './components/espectador/alta-espectador/alta-espectador.component';
import { ListaEspectadorComponent } from './components/espectador/lista-espectador/lista-espectador.component';
import { AltaTicketComponent } from './components/ticket/alta-ticket/alta-ticket.component';
import { ListaTicketComponent } from './components/ticket/lista-ticket/lista-ticket.component';


export const routes: Routes = [
    {path:'altaProducto',component:AltaProductoComponent},
    {path:'listaProducto',component:ListaProductoComponent},
    {path:'altaTransacion',component:AltaTransaccionComponent},
    {path:'listaTransaccion',component:ListaTransaccionComponent},
    {path:'altaEspectador',component:AltaEspectadorComponent},
    {path:'listaEspectador',component:ListaEspectadorComponent},
    {path:'altaTicket',component:AltaTicketComponent},
    {path:'listaTicket',component:ListaTicketComponent}
];
