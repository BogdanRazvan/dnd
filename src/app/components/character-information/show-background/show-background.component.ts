import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';
import { CharacterInfo } from '../../../interfaces/character-info';

@Component({
  selector: 'app-show-background',
  templateUrl: './show-background.component.html'
})
export class ShowBackgroundComponent implements OnInit, OnDestroy {

  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  private subscriptionCharacterInfo: Subscription;
  private subscriptionCharacterUpdate: Subscription;

  private currentSkill: Array<String>;

  private defaultBackgrounds: any;
  private defaultBackgroundsTpl: any;
  private characterInformation: any;

  ngOnInit() {
    this.subscriptionCharacterInfo = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.characterInformation = data['defaultInformation'];
        this.defaultBackgrounds = data['defaultBackgrounds'];
        this.defaultBackgroundsTpl = Object.values(this.defaultBackgrounds);
      },
      error => {},
      () => {
        this.currentSkill =
        this.defaultBackgrounds[this.characterInformation.cBackground.value.toLowerCase().replace(/ /g, '_')].skills.skillProficiencies;
      }
    );

    this.subscriptionCharacterUpdate = this.characterDataFetchService.currentInformationObs.subscribe(
      (data: any) => this.currentSkill = data.skills
    );
  }

  ngOnDestroy() {
    this.subscriptionCharacterInfo.unsubscribe();
  }

}
