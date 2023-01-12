import { Component } from '@angular/core';
import { Articulo } from 'src/app/core/Models/Articulo';
import { ChequeoService } from '../../Services/chequeo.service';

@Component({
  selector: 'app-chequeo',
  templateUrl: './chequeo.component.html',
  styleUrls: ['./chequeo.component.css'],
})
export class ChequeoComponent {
  constructor(private servicioChequeo: ChequeoService) {
    this.articulos = this.servicioChequeo.getChequeoEnCola();
  }
  public articulos: Articulo[] = [];
}
