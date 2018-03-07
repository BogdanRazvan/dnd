import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterDataFetchService } from '../../services/character-data-fetch.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html'
})

export class CharacterInformationComponent implements OnInit, OnDestroy {

  characterInformation; sub;

  constructor(
    private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.sub = this.characterDataFetchService.getInfo().subscribe(
      data => this.characterInformation = Object.values(data['defaultInformation'])
    )

    this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.characterInformation = data
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
