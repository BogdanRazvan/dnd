import { Component, OnInit } from '@angular/core';
import { CharacterDataFetchService } from '../../services/character-data-fetch.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html'
})

export class CharacterInformationComponent implements OnInit {

  currentInfo;

  constructor(
    private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.characterDataFetchService.getDefaultInformation();
  }

}
