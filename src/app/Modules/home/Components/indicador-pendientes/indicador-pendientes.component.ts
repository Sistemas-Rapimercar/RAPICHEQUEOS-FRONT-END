import { Component } from '@angular/core';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { ChequeoService } from 'src/app/Modules/chequeos/Services/chequeo.service';

@Component({
  selector: 'app-indicador-pendientes',
  templateUrl: './indicador-pendientes.component.html',
  styleUrls: ['./indicador-pendientes.component.css'],
})
export class IndicadorPendientesComponent {
  constructor(private chequeoServicio: ChequeoService) {
    /* this.chequeoServicio
      .getChequeosPendientes()
      .subscribe((data: Chequeo[]) => {
        this.chequeos = data;
      }); */
  }
  public chequeos: Chequeo[] = [];
}
