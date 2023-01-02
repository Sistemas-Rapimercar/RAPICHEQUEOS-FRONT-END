import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { IndicadorPendientesComponent } from './Components/indicador-pendientes/indicador-pendientes.component';
import { IndicadorCompletadosComponent } from './Components/indicador-completados/indicador-completados.component';

@NgModule({
  declarations: [DashboardComponent, IndicadorPendientesComponent, IndicadorCompletadosComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
