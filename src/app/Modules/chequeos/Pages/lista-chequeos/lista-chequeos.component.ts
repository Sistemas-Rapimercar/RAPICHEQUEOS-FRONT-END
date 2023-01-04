import { Component } from '@angular/core';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { ChequeoService } from '../../Services/chequeo.service';

@Component({
  selector: 'app-lista-chequeos',
  templateUrl: './lista-chequeos.component.html',
  styleUrls: ['./lista-chequeos.component.css'],
})
export class ListaChequeosComponent {
  constructor(private servicioChequeo: ChequeoService) {
    this.servicioChequeo
      .getChequeosPendientes()
      .subscribe((chequeos: Chequeo[]) => {
        this.chequeos = chequeos;
      });
  }

  public chequeos: Chequeo[] = [];

  public toTitleCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}
