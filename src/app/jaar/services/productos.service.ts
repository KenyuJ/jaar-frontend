import { Injectable } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  marca: string;   // Nuevo campo
  talla: number;   // Nuevo campo (rango 36 a 46)
  color: string;   // Nuevo campo
  
}


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private localStorageKey = 'productos';

  constructor() {}

  obtenerProductos(): Producto[] {
    const productos = localStorage.getItem(this.localStorageKey);
    return productos ? JSON.parse(productos) : [];
  }

  agregarProducto(producto: Producto): void {
    const productos = this.obtenerProductos();
    productos.push(producto);
    localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
  }

  editarProducto(producto: Producto): void {
    const productos = this.obtenerProductos();
    const index = productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      productos[index] = producto;
      localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
    }
  }

  eliminarProducto(id: number): void {
    let productos = this.obtenerProductos();
    productos = productos.filter(producto => producto.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
  }


}
