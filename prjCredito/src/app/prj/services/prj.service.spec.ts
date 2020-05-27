import { TestBed } from '@angular/core/testing';

import { PrjService } from './prj.service';

describe('PrjService', () => {
  let service: PrjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
