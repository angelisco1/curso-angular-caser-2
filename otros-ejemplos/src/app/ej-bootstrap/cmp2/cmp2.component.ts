import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {
  datos = [];
  constructor(private comunicacionServ: ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacionServ.arrayCambiado.subscribe(nuevoArray => {
      this.datos = nuevoArray;
    })
    // this.datos = this.comunicacionServ.arDatos;
  }

}
