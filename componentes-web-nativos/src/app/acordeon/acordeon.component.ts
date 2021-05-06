import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AcordeonComponent implements OnInit {
  @Input() titulo: string;
  estaCerrado: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapse() {
    this.estaCerrado = !this.estaCerrado;
  }
}
