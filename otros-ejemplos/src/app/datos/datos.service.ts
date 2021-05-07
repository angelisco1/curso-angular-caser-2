import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  URL: string = 'https://fluentjobs-fa22e.firebaseio.com/trabajos';
  constructor(private http: HttpClient) { }

  getOfertasTrabajo() {
    return this.http.get(this.URL + '.json', {observe: 'response'})
      .pipe(
        map((resp) => {
          console.log(resp)
          if (resp.ok) {
            const datos = resp.body;
            const arrayOfertas = [];
            for (let id in datos) {
              arrayOfertas.push({
                id: id,
                ...datos[id]
              })
              // Object.assign({}, {id: id}, datos[id]);
            }
            return arrayOfertas;
          }
        })
      );
  }

  createOfertaTrabajo() {
    const nuevaOferta = {
      ciudad: 'aaaa',
      descripcion: 'aaaa',
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/6/7/7/677_169_52.png',
      salario: 20000,
      nombre: 'AAAA'
    }
    return this.http.post(this.URL + '.json', JSON.stringify(nuevaOferta), {observe: 'response'})
      .pipe(
        map(resp => {
          return resp.body;
        })
      )
  }
}
