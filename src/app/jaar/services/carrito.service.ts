import { Injectable } from '@angular/core';
import { Producto } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private localStorageKey = 'carrito';

  obtenerCarrito(): Producto[] {
    const carrito = localStorage.getItem(this.localStorageKey);
    return carrito ? JSON.parse(carrito) : [];
  }

  agregarAlCarrito(producto: Producto): void {
    const carrito = this.obtenerCarrito();
    carrito.push(producto);
    localStorage.setItem(this.localStorageKey, JSON.stringify(carrito));
  }

  vaciarCarrito(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  actualizarCarrito(productos: Producto[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
  }

  eliminarDelCarrito(id: number): void {
    let carrito = this.obtenerCarrito();
    carrito = carrito.filter(producto => producto.id !== id);
    this.actualizarCarrito(carrito);
  }


}
