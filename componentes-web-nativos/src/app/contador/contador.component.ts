import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContadorComponent implements OnInit {
  @Input() cuenta: number = 0;
  @Output() cuentaCambiada = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.cuenta = 1 + this.cuenta;
    const esPar = this.cuenta % 2 === 0 ? 'Es par' : 'Es impar';
    this.cuentaCambiada.emit(esPar);
  }

  decrementar() {
    this.cuenta = this.cuenta - 1;
    const esPar = this.cuenta % 2 === 0 ? 'Es par' : 'Es impar';
    this.cuentaCambiada.emit(esPar);
  }
}
