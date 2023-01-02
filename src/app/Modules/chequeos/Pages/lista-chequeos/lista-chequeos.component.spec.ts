import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChequeosComponent } from './lista-chequeos.component';

describe('ListaChequeosComponent', () => {
  let component: ListaChequeosComponent;
  let fixture: ComponentFixture<ListaChequeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaChequeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaChequeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
