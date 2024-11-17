import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';
import { RegistrosComponent } from './jaar/components/registros/registros.component';
import { VentasComponent } from './jaar/components/ventas/ventas.component';
import { MovimientosComponent } from './jaar/components/movimientos/movimientos.component';
import { LoginComponent } from './auth/login/login.component';
import { EditarProductosComponent } from './jaar/components/editar-productos/editar-productos.component';
import { ListaProductosComponent } from './jaar/components/lista-productos/lista-productos.component';
import { FormularioComponent } from './jaar/components/formulario/formulario.component';
import { CarritoComponent } from './jaar/components/carrito/carrito.component';
import { VentaComponent } from './jaar/components/venta/venta.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: 'editar/:id', component: EditarProductosComponent},
  {path: 'lista', component:ListaProductosComponent},
  {path: 'editarF/:id', component:FormularioComponent},
  {path: 'registros', component:RegistrosComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'venta', component:VentaComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent,
    children:[
      {path:'registros',component:RegistrosComponent},
      {path:'ventas',component:VentasComponent},
      {path:'movimientos',component:MovimientosComponent},
      {path:'lista',component:ListaProductosComponent},
      {path:'editar',component:EditarProductosComponent},
      {path: 'registros', component: RegistrosComponent},
      {path: 'editarF', component:FormularioComponent},
      {path: 'carrito', component: CarritoComponent},
    {path: 'venta', component:VentaComponent}
  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
