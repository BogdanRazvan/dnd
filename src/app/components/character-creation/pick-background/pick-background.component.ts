import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';
import { CharacterInfo } from '../../../interfaces/character-info';

@Component({
  selector: 'app-pick-background',
  templateUrl: './pick-background.component.html'
})
export class PickBackgroundComponent implements OnInit, OnDestroy {

  private currentInformation: CharacterInfo;
  private currentInformationTpl: Array<CharacterInfo>;

  private currentBackgrounds: Object;
  private currentBackgroundsTpl: Array<Object>;
  private currentBackground: String;
  private currentSkill: String;
  private currentTrait: String;
  private currentCharacteristics = {
    currentPersonality: String,
    currentBond: String,
    currentFlaw: String,
    currentIdeal: String
  };

  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;
  private backgroundSubscription: Subscription;

  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.infoSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentInformation = data['defaultInformation'];
        this.currentBackgrounds = data['defaultBackgrounds'];
      },
      error => {},
      () => {
        this.currentBackground = this.currentInformation.cBackground.value;
        this.currentInformationTpl = Object.values(this.currentInformation);
        this.currentBackgroundsTpl = Object.values(this.currentBackgrounds);
      }
    );

    this.infoUpdateSubscription = this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.currentInformationTpl = data
    );
  }

  private updateInfo(value) {
    this.currentInformation.cBackground.value = this.currentBackground = value;
    if (this.currentBackgrounds[this.currentBackground.toLowerCase().replace(/ /g, '_')].skills) {
      this.currentInformation.cBackground.skills =
      this.currentBackgrounds[this.currentBackground.toLowerCase().replace(/ /g, '_')].skills.skillProficiencies;
    }
    this.characterDataFetchService.updateInfo(this.currentInformation.cBackground);
  }

  private selectTrait(item) {
    this.currentTrait = item;
  }

  private selectCharacteristic(characteristic, type) {
    this.currentCharacteristics[type] = characteristic;
  }

  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
  }

}
