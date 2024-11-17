import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { VentaComponent } from './components/venta/venta.component';


const routes: Routes = [
  { path: 'lista', component: ListaProductosComponent},
  { path: 'editar', component: EditarProductosComponent},
  { path: 'registros', component:RegistrosComponent},
  { path: 'editarF', component: FormularioComponent},
  { path: 'carrito', component:CarritoComponent},
  { path: 'venta', component: VentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { } 