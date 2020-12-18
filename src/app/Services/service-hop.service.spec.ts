import { TestBed } from '@angular/core/testing';

import { ServiceHopService } from './service-hop.service';

describe('ServiceHopService', () => {
  let service: ServiceHopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
