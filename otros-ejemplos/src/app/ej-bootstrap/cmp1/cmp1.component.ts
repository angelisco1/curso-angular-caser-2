import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  constructor(private comunicacionServ: ComunicacionService) { }

  ngOnInit(): void {
  }

  nuevoDato() {
    this.comunicacionServ.addDato(Math.random());
  }

}
