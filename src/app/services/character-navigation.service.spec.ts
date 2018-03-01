import { TestBed, inject } from '@angular/core/testing';

import { CharacterNavigationService } from './character-navigation.service';

describe('CharacterNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterNavigationService]
    });
  });

  it('should be created', inject([CharacterNavigationService], (service: CharacterNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
