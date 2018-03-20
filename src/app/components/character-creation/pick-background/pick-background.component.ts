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
  private currentTrait: String;

  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;
  private backgroundSubscription: Subscription;

  private displayTraits: Boolean = false;
  private displayCharacteristics: Object = {
    'personality': false,
    'ideals': false,
    'bonds': false,
    'flaws': false,
  };

  constructor(private characterDataFetchService: CharacterDataFetchService) { }

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
      },
      error => {},
      () => this.updateTrait()
    );
  }

  private updateInfo(value) {
    this.currentInformation.cBackground.value = this.currentBackground = value;
    this.characterDataFetchService.updateInfo(this.currentInformation.cBackground);
    this.updateTrait();
  }

  private showHideTraits() {
    this.displayTraits = !this.displayTraits;
  }

  private showHideCharacteristics(eventValue) {
    eventValue = eventValue.toLowerCase();
    this.displayCharacteristics[eventValue] = !this.displayCharacteristics[eventValue];
  }

  private selectTrait(item) {
    this.currentTrait = item;
  }

  private updateTrait(): void {
    const backgroundKey = this.currentBackgrounds[this.currentBackground.toLowerCase().replace(/ /g, '_')];
    if (backgroundKey.traits) {
      if (backgroundKey.traits.trait &&
      backgroundKey.traits.trait.traits.indexOf(this.currentTrait) === -1) {
        this.currentTrait = this.currentBackgrounds[this.currentBackground.toLowerCase()].traits.trait.traits[Math.floor(Math.random() *
          this.currentBackgrounds[this.currentBackground.toLowerCase().replace(/ /g, '_')].traits.trait.traits.length - 1)];
        return;
      }

      if (backgroundKey.traits.item &&
        backgroundKey.traits.item.items.indexOf(this.currentTrait) === -1) {
        this.currentTrait = backgroundKey.traits.item.items[Math.floor(Math.random() *
          backgroundKey.traits.item.items.length - 1)];
        return;
      }
    }

  }

  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
    this.backgroundSubscription.unsubscribe();
  }

}
