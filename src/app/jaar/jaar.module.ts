import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrosComponent } from './components/registros/registros.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { VentaComponent } from './components/venta/venta.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    RegistrosComponent,
    VentasComponent,
    MovimientosComponent,
    ListaProductosComponent,
    EditarProductosComponent,
    FormularioComponent,
    CarritoComponent,
    VentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
],
  exports:[
    RegistrosComponent,
    VentasComponent,
    MovimientosComponent,
    ListaProductosComponent,
    EditarProductosComponent,
    FormularioComponent,
    CarritoComponent,
    VentaComponent
  
  ]
})
export class JaarModule { }
