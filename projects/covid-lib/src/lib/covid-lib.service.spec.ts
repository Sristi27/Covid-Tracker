import { TestBed } from '@angular/core/testing';

import { CovidLibService } from './covid-lib.service';

describe('CovidLibService', () => {
  let service: CovidLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
