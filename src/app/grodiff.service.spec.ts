import { TestBed } from '@angular/core/testing';

import { GrodiffService } from './grodiff.service';

describe('GrodiffService', () => {
  let service: GrodiffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrodiffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
