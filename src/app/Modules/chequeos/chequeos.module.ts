import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaChequeosComponent } from './Pages/lista-chequeos/lista-chequeos.component';
import { ChequeoComponent } from './Pages/chequeo/chequeo.component';
import { ChequeoRoutingModule } from './chequeo-routing.module';
import { LayoutChequeosComponent } from './Components/layout-chequeos/layout-chequeos.component';

@NgModule({
  declarations: [
    ListaChequeosComponent,
    ChequeoComponent,
    LayoutChequeosComponent,
  ],
  imports: [CommonModule, ChequeoRoutingModule],
})
export class ChequeosModule {}
