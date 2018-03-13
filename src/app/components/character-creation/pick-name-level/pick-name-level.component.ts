import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';
import { CharacterInfo } from '../../../interfaces/character-info';

@Component({
  selector: 'app-pick-name-level',
  templateUrl: './pick-name-level.component.html'
})
export class PickNameLevelComponent implements OnInit, OnDestroy {

  characterInformation: CharacterInfo;
  characterInformationCopy: CharacterInfo;
  characterInformationTpl: Array<CharacterInfo>;
  cName: String;
  cLevel: Number;
  subscription: Subscription;

  constructor(private characterDataFetchService: CharacterDataFetchService) {   }

  ngOnInit() {
    this.subscription = this.characterDataFetchService.getInfo().subscribe(
      data =>  {
        this.characterInformation = data['defaultInformation'];
        this.characterInformationCopy = JSON.parse(JSON.stringify(data['defaultInformation']));
        this.characterInformationTpl = Object.values(this.characterInformation);

        this.cName = this.characterInformation.cName.value;
        this.cLevel = this.characterInformation.cLevel.value;
      }
    );

    this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.characterInformationTpl = data
    );
  }

  setSelectedName(item: String) {
    this.characterInformation.cName.value = item ? item : this.characterInformationCopy.cName.value;
    this.cLevel = this.characterInformation.cLevel.value;
    this.characterDataFetchService.updateInfo(this.characterInformation.cName);
  }

  setSelectedLevel(item: Number) {
    this.characterInformation.cLevel.value = item ? item : this.characterInformationCopy.cLevel.value;
    this.characterDataFetchService.updateInfo(this.characterInformation.cLevel);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
