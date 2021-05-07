import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from './datos.service';

interface ResponseCreate {
  name: string
}

interface OfertaTrabajo {
  nombre: string,
  descripcion: string,
  imgUrl: string,
  salario: number,
  ciudad: string
}

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  ofertas = [];
  constructor(private datosService: DatosService, private router: Router) { }

  ngOnInit(): void {
    this.datosService.getOfertasTrabajo()
      .subscribe((datos: Array<OfertaTrabajo>) => {
        console.log(datos);
        this.ofertas = datos;
      });
  }

  crearOferta() {
    this.datosService.createOfertaTrabajo()
      .subscribe((response: ResponseCreate) => {
        console.log(response.name);
        this.router.navigate(['/']);
      });
      // .subscribe(resp => {
      //   console.log(resp)
      // })
  }
}
