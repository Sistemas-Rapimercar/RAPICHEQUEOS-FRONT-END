import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Modules/auth/login/login.component';
import { DashboardComponent } from './Modules/home/dashboard/dashboard.component';
import { LayoutComponent } from './Shared/layout/Components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Shared/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./Shared/layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
