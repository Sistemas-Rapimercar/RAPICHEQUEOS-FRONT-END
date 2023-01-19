import { Component } from '@angular/core';
import { ChequeoService } from '../../chequeos/Services/chequeo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private chequeoServicio: ChequeoService) {
    /* this.chequeoServicio.getGift().subscribe((data) => {
      console.log(data);
      this.images = data.data;
    }); */
  }
  images: any[];
}
