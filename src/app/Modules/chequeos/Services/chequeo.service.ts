import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chequeo } from 'src/app/core/Models/Chequeo';

@Injectable({
  providedIn: 'root',
})
export class ChequeoService {
  constructor() {}

  public getChequeosPendientes(): Observable<Chequeo[]> {
    let c1: Chequeo = {
      id: 1,
      departamento: { id: 1, descripcion: 'supermercado' },
      seccion: { id: 1, descripcion: 'paquetes' },
      familia: { id: 1, descripcion: 'mekatos' },
      subFamilia: { id: 1, descripcion: 'doritos' },
      estado: 'F',
    };

    let c2: Chequeo = {
      id: 1,
      departamento: { id: 1, descripcion: 'supermercado' },
      seccion: { id: 1, descripcion: 'paquetes' },
      familia: { id: 1, descripcion: 'mekatos' },
      subFamilia: { id: 1, descripcion: 'doritos' },
      estado: 'F',
    };

    let c3: Chequeo = {
      id: 1,
      departamento: { id: 1, descripcion: 'supermercado' },
      seccion: { id: 1, descripcion: 'paquetes' },
      familia: { id: 1, descripcion: 'mekatos' },
      subFamilia: { id: 1, descripcion: 'doritos' },
      estado: 'F',
    };

    let c4: Chequeo = {
      id: 1,
      departamento: { id: 1, descripcion: 'supermercado' },
      seccion: { id: 1, descripcion: 'paquetes' },
      familia: { id: 1, descripcion: 'mekatos' },
      subFamilia: { id: 1, descripcion: 'doritos' },
      estado: 'F',
    };

    let response = new Observable<Chequeo[]>((observer) => {
      observer.next([c1, c2, c3, c4, c1, c2, c3, c4]);
    });
    return response;
  }
}
