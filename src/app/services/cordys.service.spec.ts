import { TestBed } from '@angular/core/testing';

import { CordysService } from './cordys.service';

describe('CordysService', () => {
  let service: CordysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CordysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
