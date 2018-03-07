import { Component, OnInit } from '@angular/core';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {
  
  currentClasses; currentDescription; currentInformation;
  
  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  ngOnInit() {
    this.characterDataFetchService.getInfo().subscribe(
      data => this.currentClasses = Object.values(data['defaultClasses'])
    )

    this.characterDataFetchService.getInfo().subscribe(
      data => this.currentInformation = Object.values(data['defaultInformation'])
    )

    this.characterDataFetchService.currentInformationObs.subscribe(
      data => this.currentInformation = data
    )
  }
  
  updateInfo(value) {
    this.currentInformation[1].value = value;
    this.characterDataFetchService.updateInfo(this.currentInformation);
  }

  setSelectedClass(eventValue: string) {
    
  }

}
