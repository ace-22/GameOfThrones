import { TestBed } from '@angular/core/testing';

import { GotHttpService } from './got-http.service';

describe('GotHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GotHttpService = TestBed.get(GotHttpService);
    expect(service).toBeTruthy();
  });
});
