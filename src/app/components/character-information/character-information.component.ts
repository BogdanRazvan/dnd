import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

import { CharacterDataFetchService } from '../../services/character-data-fetch.service';
import { CharacterInfo } from '../../interfaces/character-info';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html'
})

export class CharacterInformationComponent implements OnInit, OnDestroy {

  private characterInformation: Array<CharacterInfo>;
  private subscriptionCharacterInfo: Subscription;
  private subscriptionCharacterUpdate: Subscription;

  constructor(
    private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.subscriptionCharacterInfo = this.characterDataFetchService.getInfo().subscribe(
      data => this.characterInformation = Object.values(data['defaultInformation'])
    );

    this.subscriptionCharacterUpdate = this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.characterInformation = Object.values(data)
    );
  }

  ngOnDestroy() {
    this.subscriptionCharacterInfo.unsubscribe();
    this.subscriptionCharacterUpdate.unsubscribe();
  }

}
