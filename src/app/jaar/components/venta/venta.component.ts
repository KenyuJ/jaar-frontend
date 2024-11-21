import { Component } from '@angular/core';
import { Producto } from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrl: './venta.component.css',
  
})
export class VentaComponent {
  productosEnCarrito: Producto[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.productosEnCarrito = this.carritoService.obtenerCarrito();
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  }

  finalizarCompra(): void {
    // Lógica para finalizar la compra, por ejemplo, vaciar el carrito y guardar la orden
    alert('Compra realizada con éxito!');
    this.carritoService.vaciarCarrito();
  }

}
