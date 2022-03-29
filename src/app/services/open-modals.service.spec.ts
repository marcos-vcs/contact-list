import { TestBed } from '@angular/core/testing';

import { OpenModalsService } from './open-modals.service';

describe('OpenModalsService', () => {
  let service: OpenModalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenModalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
