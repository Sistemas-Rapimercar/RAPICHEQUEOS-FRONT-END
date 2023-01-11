import { Component } from '@angular/core';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { ChequeoService } from 'src/app/Modules/chequeos/Services/chequeo.service';

@Component({
  selector: 'app-indicador-completados',
  templateUrl: './indicador-completados.component.html',
  styleUrls: ['./indicador-completados.component.css'],
})
export class IndicadorCompletadosComponent {
  constructor(private chequeoServicio: ChequeoService) {
    /* this.chequeoServicio
      .getChequeosPendientes()
      .subscribe((data: Chequeo[]) => {
        this.chequeos = data;
      }); */
  }
  public chequeos: Chequeo[] = [];
}
