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
      .subscribe((data: Chequeo[]) => {
        this.chequeos = data;
      });
  }

  public chequeos: Chequeo[] = [];
}
