import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaChequeosComponent } from 'src/app/Modules/chequeos/Pages/lista-chequeos/lista-chequeos.component';
import { DashboardComponent } from 'src/app/Modules/home/dashboard/dashboard.component';
import { LayoutComponent } from './Components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../../Modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'chequeos',
        loadChildren: () =>
          import('../../Modules/chequeos/chequeos.module').then(
            (m) => m.ChequeosModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
