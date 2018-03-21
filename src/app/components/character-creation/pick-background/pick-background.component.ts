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
  private currentCharacteristics = {
    currentPersonality: String,
    currentBond: String,
    currentFlaw: String,
    currentIdeal: String
  };

  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;
  private backgroundSubscription: Subscription;

  private displayTraits: Boolean = false;
  private displayCharacteristics: Object = {
    currentPersonality: false,
    currentIdeal: false,
    currentBond: false,
    currentFlaw: false,
  };

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
        this.updateTrait();
        this.updateCharacteristics();
      }
    );

    this.infoUpdateSubscription = this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.currentInformationTpl = data
    );
  }

  private updateInfo(value) {
    this.currentInformation.cBackground.value = this.currentBackground = value;
    this.characterDataFetchService.updateInfo(this.currentInformation.cBackground);
    this.updateTrait();
    this.updateCharacteristics();
  }

  private showHideTraits() {
    this.displayTraits = !this.displayTraits;
  }

  private showHideCharacteristics(eventValue) {
    this.displayCharacteristics[eventValue] = !this.displayCharacteristics[eventValue];
  }

  private selectTrait(item) {
    this.currentTrait = item;
    this.showHideTraits();
  }

  private selectCharacteristic(characteristic, type) {
    this.currentCharacteristics[type] = characteristic;
    this.showHideCharacteristics(type);
  }

  private updateTrait(): void {
    const backgroundKey = this.currentBackgrounds[this.currentBackground.toLowerCase().replace(/ /g, '_')];
    if (backgroundKey.traits) {
      if (backgroundKey.traits.trait && backgroundKey.traits.trait.traits.indexOf(this.currentTrait) === -1) {
        // Select random trait
        this.currentTrait = backgroundKey.traits.trait.traits[Math.floor(Math.random() * (backgroundKey.traits.trait.traits.length - 1))];
        return;
      }

      if (backgroundKey.traits.item && backgroundKey.traits.item.items.indexOf(this.currentTrait) === -1) {
        // Select random item
        this.currentTrait = backgroundKey.traits.item.items[Math.floor(Math.random() * (backgroundKey.traits.item.items.length - 1))];
        return;
      }
    }
  }

  private updateCharacteristics(): void {
    const backgroundTraits = this.currentBackgrounds[this.currentBackground.toLowerCase().replace(/ /g, '_')].characteristics.traits;
    this.currentCharacteristics.currentBond = backgroundTraits.bonds[Math.floor(Math.random() * (backgroundTraits.bonds.length - 1))];
    this.currentCharacteristics.currentFlaw = backgroundTraits.flaws[Math.floor(Math.random() * (backgroundTraits.flaws.length - 1))];
    this.currentCharacteristics.currentIdeal = backgroundTraits.ideals[Math.floor(Math.random() * (backgroundTraits.ideals.length - 1))];
    this.currentCharacteristics.currentPersonality =
    backgroundTraits.personalitys[Math.floor(Math.random() * (backgroundTraits.personalitys.length - 1))];
  }

  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
  }

}
