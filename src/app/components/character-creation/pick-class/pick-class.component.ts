import { Component, OnInit, OnChanges } from '@angular/core';

import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit, OnChanges {
  
  currentClass; currentDescription;
  
  constructor(private characterDataFetchService: CharacterDataFetchService) { }

  ngOnChanges() {
    this.currentClass = this.characterDataFetchService.currentInformation[1].value;
  }

  ngOnInit() {
    this.characterDataFetchService.getDefaultClasses();
    this.characterDataFetchService.getDefaultInformation().add(() => {
      this.currentClass = this.characterDataFetchService.currentInformation[1].value;
    });
  }
  
  setSelectedClass(eventValue: string) {
    this.characterDataFetchService.currentInformation[1].value = eventValue;
    this.currentClass = eventValue;
  }

}
