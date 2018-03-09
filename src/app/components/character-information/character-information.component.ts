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

  private subscriptionCharacterInfo: Subscription;
  private subscriptionCharacterUpdate: Subscription;

  private characterInformation: any;
  private characterInformationTpl: any;

  constructor(
    private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.subscriptionCharacterInfo = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.characterInformation = data['defaultInformation'];
        this.characterInformationTpl = Object.values(data['defaultInformation']);
      }
    );

    this.subscriptionCharacterUpdate = this.characterDataFetchService.currentInformationObs.subscribe(
      (data: any) => {
        if (Object.keys(data).length) {
          switch (data.key) {
            case 'Level':
              this.characterInformationTpl[1] = data;
            break;
            case 'Class':
              this.characterInformationTpl[2] = data;
            break;
            case 'Character Name':
             this.characterInformationTpl[0] = data;
            break;
            case 'Background':
            this.characterInformationTpl[3] = data;
           break;
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionCharacterInfo.unsubscribe();
    this.subscriptionCharacterUpdate.unsubscribe();
  }

}
