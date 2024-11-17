import { Injectable } from '@angular/core';

export interface Formulario {
  id: number;
  nombre: string;
  tipo: string;
  sexo: string;
  correo: string;
  telefono: number;
  dni: string;
  direccion: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private localStorageKey = 'productos';

  constructor() {}

  obtenerFormulario(): Formulario[] {
    const formularios = localStorage.getItem(this.localStorageKey);
    return formularios ? JSON.parse(formularios) : [];
  }

  editarFormulario(producto: Formulario): void {
    const productos = this.obtenerFormulario();
    const index = productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      productos[index] = producto;
      localStorage.setItem(this.localStorageKey, JSON.stringify(productos));
    }
  }

  agregarFormulario(producto: Formulario): void {
    const formularios = this.obtenerFormulario();
    formularios.push(producto);
    localStorage.setItem(this.localStorageKey, JSON.stringify(formularios));
  }

  eliminarFormulario(id: number): void {
    let formularios = this.obtenerFormulario();
    formularios = formularios.filter(producto => producto.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(formularios));
  }


}
