import { TestBed } from '@angular/core/testing';

import { SeviceDataService } from './sevice-data.service';

describe('SeviceDataService', () => {
  let service: SeviceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeviceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
