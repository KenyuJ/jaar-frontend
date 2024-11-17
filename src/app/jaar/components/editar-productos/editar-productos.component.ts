import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrl: './editar-productos.component.css'
})
export class EditarProductosComponent {
  producto: Producto = { id: 0, nombre: '', precio: 0, cantidad: 0, marca: '', talla: 36, color: '' ,}; // Actualizado con nuevos campos
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductosService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id > 0) {
      this.editMode = true;
      const productos = this.productoService.obtenerProductos();
      this.producto = productos.find(p => p.id === id)!;
    }
  }

  guardarProducto(): void {
    if (this.editMode) {
      this.productoService.editarProducto(this.producto);
    } else {
      this.producto.id = new Date().getTime(); // Generar un ID único basado en el timestamp
      this.productoService.agregarProducto(this.producto);
    }
    this.router.navigate(['/lista']);
  }


}
