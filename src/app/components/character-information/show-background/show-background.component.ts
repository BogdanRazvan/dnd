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

  private currentSkill: String;

  private defaultBackgrounds: any;
  private defaultBackgroundsTpl: any;

  ngOnInit() {
    this.subscriptionCharacterInfo = this.characterDataFetchService.getInfo().subscribe(
      data => {
        this.defaultBackgrounds = data['defaultBackgrounds'];
        this.defaultBackgroundsTpl = Object.values(this.defaultBackgrounds);
      },
      error => {},
      () => {
        this.currentSkill = this.defaultBackgrounds['criminal'].skills.skillProficiencies[0];
      }
    );
  }

  ngOnDestroy() {
    this.subscriptionCharacterInfo.unsubscribe();
  }

}
