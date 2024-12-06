import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto} from '../../services/productos.service';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';
import { ProductAll } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {

  productos: ProductAll[] = [];

  constructor(
    private productoService: ProductosService,
    private carritoService: CarritoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    // this.productos = this.productoService.obtenerProductos();
    this.productoService.getProducto().subscribe({
      next: (producto) => {
        this.productos = producto.ProductAll
      }
    })
  }

  eliminarProducto(id: number): void {
    this.productoService.eliminarProducto(id);
    // this.productos = this.productoService.obtenerProductos();
  }

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto);
    this.router.navigate(['carrito']);
  }



}
