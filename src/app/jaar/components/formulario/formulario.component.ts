import { Component } from '@angular/core';
import { Formulario, RegistroService } from '../../services/registro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario: Formulario = { id: 0, nombre: '', tipo: '', sexo: '',correo: '', telefono: 0, dni: '', direccion: ''};
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trabajoService: RegistroService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id > 0) {
      this.editMode = true;
      const formularios = this.trabajoService.obtenerFormulario();
      this.formulario = formularios.find(u => u.id === id)!;
    }
  }
  guardarFormulario(): void {
    if (this.editMode) {
      this.trabajoService.editarFormulario(this.formulario);
    } else {
      this.formulario.id = new Date().getTime(); // Generar un ID único basado en el timestamp
      this.trabajoService.agregarFormulario(this.formulario);
    }
    this.router.navigate(['/menu/registros']);
  }

}
