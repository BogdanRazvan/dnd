import { TestBed, inject } from '@angular/core/testing';

import { CharacterUpdateInformationService } from './character-update-information.service';

describe('CharacterUpdateInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterUpdateInformationService]
    });
  });

  it('should be created', inject([CharacterUpdateInformationService], (service: CharacterUpdateInformationService) => {
    expect(service).toBeTruthy();
  }));
});
