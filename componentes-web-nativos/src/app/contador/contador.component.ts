import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ContadorComponent implements OnInit {
  cuenta: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.cuenta += 1;
  }

  decrementar() {
    this.cuenta -= 1;
  }
}
