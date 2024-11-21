import { Component } from '@angular/core';
import { Producto } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';
import { SharedModule } from "../../../shared/shared.module";
import { MenuComponent } from "../../../shared/components/menu/menu.component";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',  
  styleUrl: './carrito.component.css'
  
})
export class CarritoComponent {
  productosEnCarrito: Producto[] = [];
  tallasDisponibles: number[] = Array.from({length: 11}, (_, i) => i + 36); // Tallas de 36 a 46

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
  }

  eliminarProducto(index: number): void {
    this.productosEnCarrito.splice(index, 1);
    this.carritoService.actualizarCarrito(this.productosEnCarrito);
  }

  actualizarProducto(index: number): void {
    this.carritoService.actualizarCarrito(this.productosEnCarrito);
  }

}
