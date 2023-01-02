import { TestBed } from '@angular/core/testing';

import { ChequeoService } from './chequeo.service';

describe('ChequeoService', () => {
  let service: ChequeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
