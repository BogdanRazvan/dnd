import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../../../services/character-update-information.service';
import { TechnicalMapObjectService } from '../../../services/technical-map-object.service';
import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {

  constructor(private characterInfoService: CharacterUpdateInformationService,
    private characterDataFetchService: CharacterDataFetchService,
    private technicalMapObjectService: TechnicalMapObjectService) { }

    defaultCharacter: Object;
    characterClass: String = 'Barbarian';

  ngOnInit() {
    this.showCharacter();
  }
  showCharacter() {
    this.characterDataFetchService.getCharacterInfo().subscribe(data =>
      this.defaultCharacter = this.technicalMapObjectService.generateArray(data['defaultClasses']));
  }

  getSelectedClass(item: string) {
    this.characterInfoService.updateClass(item);
    this.characterClass = item;
  }

}
