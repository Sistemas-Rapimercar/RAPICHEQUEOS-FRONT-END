import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorCompletadosComponent } from './indicador-completados.component';

describe('IndicadorCompletadosComponent', () => {
  let component: IndicadorCompletadosComponent;
  let fixture: ComponentFixture<IndicadorCompletadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorCompletadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorCompletadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
