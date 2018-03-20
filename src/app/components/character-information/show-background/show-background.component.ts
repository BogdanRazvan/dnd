import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';
import { CharacterInfo } from '../../../interfaces/character-info';

@Component({
  selector: 'app-show-background',
  templateUrl: './show-background.component.html'
})
export class ShowBackgroundComponent implements OnInit, OnDestroy {

  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  private currentInformation: CharacterInfo;
  private currentInformationTpl: Array<CharacterInfo>;

  private currentBackgrounds: Object;
  private currentBackgroundsTpl: Array<Object>;
  private currentBackground: String;

  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;
  private backgroundSubscription: Subscription;

  private displayCharacteristics: Object = {
    'personality': false,
    'ideals': false,
    'bonds': false,
    'flaws': false,
  };

  ngOnInit() {
    this.infoSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentInformation = data['defaultInformation'];
        this.currentBackground = this.currentInformation.cBackground.value;
        this.currentInformationTpl = Object.values(this.currentInformation);
      }
    );

    this.infoUpdateSubscription = this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.currentInformationTpl = data
    );

    this.backgroundSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentBackgrounds = data['defaultBackgrounds'];
        this.currentBackgroundsTpl = Object.values(this.currentBackgrounds);
      }
    );
  }

  private updateInfo(value) {
    this.currentInformation.cBackground.value = this.currentBackground = value;
    this.characterDataFetchService.updateInfo(this.currentInformation.cBackground);
  }

  private showHideCharacteristics(eventValue) {
    eventValue = eventValue.toLowerCase();
    this.displayCharacteristics[eventValue] = !this.displayCharacteristics[eventValue];
  }


  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
    this.backgroundSubscription.unsubscribe();
  }

}
