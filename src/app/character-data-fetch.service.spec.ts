import { TestBed, inject } from '@angular/core/testing';

import { CharacterDataFetchService } from './character-data-fetch.service';

describe('CharacterDataFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterDataFetchService]
    });
  });

  it('should be created', inject([CharacterDataFetchService], (service: CharacterDataFetchService) => {
    expect(service).toBeTruthy();
  }));
});
