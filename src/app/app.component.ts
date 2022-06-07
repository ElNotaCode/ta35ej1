import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ta35ej1';

  arrayListadoClientes = [
    ['Cliente1', 'B 123', 'C/la la la', '1'],
    ['Cliente2', 'A 334', 'Av.lo lo lo', '2'],
    // añadir arrayTemporal
  ];

  nombre: any = '';
  cif: any = '';
  direccion: any = '';
  grupo: any = '';

  guardar() {
    //guardamos en un array
    let arrayTemporal = [this.nombre, this.cif, this.direccion, this.grupo];
    //lo meto dentro del array de listado
    this.arrayListadoClientes.push(arrayTemporal);
  }
}
