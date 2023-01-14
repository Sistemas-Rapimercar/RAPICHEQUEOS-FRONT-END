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
    this.chequeoServicio.getChequeosPendientes().subscribe((data) => {
      this.chequeos = data;
    });
  }
  /* get chequeos(): Chequeo[] {
    //console.log(this.chequeoServicio.getChequeos());

    return this.chequeoServicio.getChequeos();
  } */

  chequeos: Chequeo[];
}
