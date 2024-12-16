import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GraphqlService } from './graphql.service';
import { Products } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  marca: string;   // Nuevo campo
  talla: number;   // Nuevo campo (rango 36 a 46)
  color: string;   // Nuevo campo
  
}


const GET_PRODUCTOS = `
query ProductAll {
  ProductAll {
    pro_id
    pro_nombre
    pro_marca
    pro_precio
    pro_talla
    pro_cantidad
    pro_color
    pro_estado
    pro_seccion
  }
}
`


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private localStorageKey = 'productos';

  constructor(
    private readonly graphService : GraphqlService,
    private http: HttpClient    
  ) {}

  getProducto()
  {
    return this.graphService.executeQuery<Products>(GET_PRODUCTOS)
  }

  obtenerProductos(): Producto[] {
    const productos = localStorage.getItem(this.localStorageKey);
    return productos ? JSON.parse(productos) : [];
  }

  private _baseUrl: string = environment.graphqlUrl;
  
  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.graphService}/productos`, producto);
  }

  /*agregarProducto(producto: Producto): void {
    const productos = this.obtenerProductos();
    productos.push(producto);
    localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
  }*/
 

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
