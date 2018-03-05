import { Component, OnInit } from '@angular/core';
import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';

@Component({
  selector: 'app-pick-name',
  templateUrl: './pick-name.component.html'
})
export class PickNameComponent implements OnInit {
  currentName: String;
  currentInfo: Object;
  constructor(private characterDataFetchService: CharacterDataFetchService) {   }

  ngOnInit() {
    this.characterDataFetchService.getCharacterInformation().subscribe(result => 
      this.currentInfo = result
    )}
  }
