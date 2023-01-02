import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutChequeosComponent } from './Components/layout-chequeos/layout-chequeos.component';
import { ChequeoComponent } from './Pages/chequeo/chequeo.component';
import { ListaChequeosComponent } from './Pages/lista-chequeos/lista-chequeos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutChequeosComponent,
    children: [
      {
        path: 'lista',
        component: ListaChequeosComponent,
      },
      {
        path: 'chequeo',
        component: ChequeoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChequeoRoutingModule {}
