import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutChequeosComponent } from './layout-chequeos.component';

describe('LayoutChequeosComponent', () => {
  let component: LayoutChequeosComponent;
  let fixture: ComponentFixture<LayoutChequeosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutChequeosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutChequeosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
