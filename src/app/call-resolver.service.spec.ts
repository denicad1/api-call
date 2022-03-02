import { TestBed } from '@angular/core/testing';

import { CallResolverService } from './call-resolver.service';

describe('CallResolverService', () => {
  let service: CallResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
