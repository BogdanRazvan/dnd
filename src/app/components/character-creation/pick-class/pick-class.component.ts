import { Component, OnInit } from '@angular/core';

import { TechnicalMapObjectService } from '../../../services/technical-map-object.service';
import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {
  currentClass: String;
  constructor(
    private characterDataFetchService: CharacterDataFetchService,
    private technicalMapObjectService: TechnicalMapObjectService) { }

  ngOnInit() {
    this.characterDataFetchService.getCharacterClass();
    this.characterDataFetchService.getCharacterInformation().add(() => {
      this.currentClass = this.characterDataFetchService.defaultInformation[1].value;
    });
  }

  setSelectedClass(item: string) {
    this.characterDataFetchService.defaultInformation[1].value = item;
    this.currentClass = item;
  }

}
