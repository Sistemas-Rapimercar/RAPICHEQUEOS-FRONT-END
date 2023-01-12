import { Component } from '@angular/core';
import { Articulo } from 'src/app/core/Models/Articulo';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { ChequeoService } from '../../Services/chequeo.service';

@Component({
  selector: 'app-lista-chequeos',
  templateUrl: './lista-chequeos.component.html',
  styleUrls: ['./lista-chequeos.component.css'],
})
export class ListaChequeosComponent {
  constructor(private servicioChequeo: ChequeoService) {
    this.chequeos = this.servicioChequeo.getChequeosPendientesInStorage();
  }

  public chequeos: Chequeo[] = [];
  public articulos: Articulo[] = [];

  public toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  public getChequeosInServer(): void {
    this.servicioChequeo.getChequeosPendientesInServer().subscribe((data) => {
      this.chequeos = data;
    });
  }
  public cargarArticulosChequeo(
    departamento: number,
    seccion: number,
    familia: number,
    subFamilia: number,
    idChequeo: number
  ): void {
    this.servicioChequeo
      .getArticulosChequeo(departamento, seccion, familia, subFamilia)
      .subscribe((data) => {
        this.servicioChequeo.setArticulosChequeoInStorage(data.data, idChequeo);
      });
  }

  public articulosChequeoExiste(idChequeo: number): boolean {
    if (sessionStorage.getItem('articulos_chequeo:' + idChequeo)) {
      return true;
    }
    return false;
  }

  public setChequeoEnCola(id: number): void {
    this.servicioChequeo.setChequeoEnCola(id);
  }
}
