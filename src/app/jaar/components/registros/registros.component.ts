import { Component } from '@angular/core';
import { Formulario, RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrl: './registros.component.css'
})
export class RegistrosComponent {
  formularios: Formulario[] = [];

  constructor(private trabajoService: RegistroService) {}

  ngOnInit(): void {
    this.formularios = this.trabajoService.obtenerFormulario();
  }
  eliminarFormulario(id: number): void {
    this.trabajoService.eliminarFormulario(id);
    this.formularios = this.trabajoService.obtenerFormulario();
  }

}
