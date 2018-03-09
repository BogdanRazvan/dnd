import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

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

  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;
  private backgroundSubscription: Subscription;

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
      }
    );
  }

  private updateInfo(value) {
    this.currentInformation.cBackground.value = this.currentBackground = value;
    this.characterDataFetchService.updateBackgroundInfo(this.currentInformation);
  }

  ngOnDestroy() {
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
    this.backgroundSubscription.unsubscribe();
  }

}
