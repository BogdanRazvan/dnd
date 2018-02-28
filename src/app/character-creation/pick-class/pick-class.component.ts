import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../../character-update-information.service';
import { CharacterDataFetchService } from '../../character-data-fetch.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {

  constructor(private characterInforService: CharacterUpdateInformationService,
    private characterDataFetchService: CharacterDataFetchService) { }

    defaultCharacter: Object;

  ngOnInit() {
    this.showCharacter();
  }

  showCharacter() {
    this.characterDataFetchService.getCharacterInfo().subscribe(data => this.defaultCharacter = data['defaultClasses']);
  }

  getSelectedClass(item: string) {
    this.characterInforService.updateItem(item);
  }

}