import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorPendientesComponent } from './indicador-pendientes.component';

describe('IndicadorPendientesComponent', () => {
  let component: IndicadorPendientesComponent;
  let fixture: ComponentFixture<IndicadorPendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorPendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
