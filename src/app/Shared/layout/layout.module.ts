import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './Components/navbar/navbar.component';

@NgModule({
  declarations: [LayoutComponent, NavbarComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}
