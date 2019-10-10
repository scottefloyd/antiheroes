import { TestBed } from '@angular/core/testing';

import { AntiService } from './anti.service';

describe('AntiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntiService = TestBed.get(AntiService);
    expect(service).toBeTruthy();
  });
});
