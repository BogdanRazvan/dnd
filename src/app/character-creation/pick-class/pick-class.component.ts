import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../../character-update-information.service';
import { CharacterDataFetchService } from '../../character-data-fetch.service';
import { CharacterDetailsInterface } from '../../character-details-interface';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {

  constructor(private characterInforService: CharacterUpdateInformationService,
    private characterDataFetchService: CharacterDataFetchService) { }

    defaultCharacter: Object;

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {
    this.characterDataFetchService.getCharacterInfo().subscribe(data => this.defaultCharacter = data);
  }

  getSelectedClass(item: string) {
    this.characterInforService.updateItem(item);
  }

}
