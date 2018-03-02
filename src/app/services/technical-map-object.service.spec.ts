import { TestBed, inject } from '@angular/core/testing';

import { TechnicalMapObjectService } from './technical-map-object.service';

describe('TechnicalMapObjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnicalMapObjectService]
    });
  });

  it('should be created', inject([TechnicalMapObjectService], (service: TechnicalMapObjectService) => {
    expect(service).toBeTruthy();
  }));
});
