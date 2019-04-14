import { TestBed } from '@angular/core/testing';

import { ItsgService } from './itsg.service';

describe('ItsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItsgService = TestBed.get(ItsgService);
    expect(service).toBeTruthy();
  });
});
