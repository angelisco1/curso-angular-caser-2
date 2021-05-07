import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  arrayCambiado = new EventEmitter<Array<any>>();

  arDatos = [];
  constructor() { }

  addDato(dato) {
    // this.arDatos.push(dato);
    this.arDatos = [...this.arDatos, dato];

    this.arrayCambiado.emit(this.arDatos);
  }
}
