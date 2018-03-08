/*
* Renders the pick class screen
**/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PropertyRead } from '@angular/compiler';

import { Observable } from 'rxjs/Observable';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';
import { CharacterDataFetch } from '../../../interfaces/character-data-fetch';
import { CharacterInfo } from '../../../interfaces/character-info';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit, OnDestroy {

  private currentClasses: CharacterDataFetch;
  private currentClassesTpl: Array<CharacterDataFetch>;
  private currentInformation: CharacterInfo;
  private currentInformationTpl: Array<CharacterInfo>;
  private currentClass: String;

  private classSubscription: Subscription;
  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;

  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.classSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentClasses = data['defaultClasses'];
        this.currentClassesTpl = Object.values(this.currentClasses);
      }
    );

    this.infoSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentInformation = data['defaultInformation'];
        this.currentClass = this.currentInformation.cClass.value;
        this.currentInformationTpl = Object.values(this.currentInformation);
      }
    );

    this.infoUpdateSubscription = this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.currentInformationTpl = data
    );
  }

  private updateInfo(value) {
    this.currentInformation.cClass.value = this.currentClass = value;
    this.characterDataFetchService.updateInfo(this.currentInformation);
  }

  ngOnDestroy() {
    this.classSubscription.unsubscribe();
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
  }

}
