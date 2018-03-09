/*
* Renders the pick class screen
**/

import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';
import { CharacterDataFetch } from '../../../interfaces/character-data-fetch';
import { CharacterInfo } from '../../../interfaces/character-info';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit, OnDestroy {

  private currentClasses: CharacterDataFetch;
  private currentClassesTpl: Array<CharacterDataFetch>;
  private currentInformation: CharacterInfo;
  private currentInformationTpl: any;
  private currentClass: String;

  private classSubscription: Subscription;
  private infoSubscription: Subscription;
  private infoUpdateSubscription: Subscription;

  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.infoSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentInformation = data['defaultInformation'];
        this.currentClass = this.currentInformation.cClass.value;
        this.currentInformationTpl = Object.values(this.currentInformation);
      }
    );

    this.infoUpdateSubscription = this.characterDataFetchService.currentInformationObs.subscribe(
      data => {
        if (Object.keys(data).length) {
          this.currentInformationTpl[1] = data;
        }
      }
    );

    this.classSubscription = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.currentClasses = data['defaultClasses'];
        this.currentClassesTpl = Object.values(this.currentClasses);
      }
    );
  }

  private updateInfo(value) {
    this.currentInformation.cClass.value = this.currentClass = value;
    this.characterDataFetchService.updateClassInfo(this.currentInformation);
  }

  ngOnDestroy() {
    this.classSubscription.unsubscribe();
    this.infoSubscription.unsubscribe();
    this.infoUpdateSubscription.unsubscribe();
  }

}
