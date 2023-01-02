import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeoComponent } from './chequeo.component';

describe('ChequeoComponent', () => {
  let component: ChequeoComponent;
  let fixture: ComponentFixture<ChequeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequeoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChequeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
