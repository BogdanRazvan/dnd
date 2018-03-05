import { Component, OnInit } from '@angular/core';

import { TechnicalMapObjectService } from '../../../services/technical-map-object.service';
import { CharacterDataFetchService } from '../../../services/character-data-fetch.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {
  public defaultInformation: any;
  public defaultInformationValues: Object;
  public defaultClasses: Object;
  public defaultClassesValues: Object;  
  public currentClassDescription: String;

  constructor(
    private characterDataFetchService: CharacterDataFetchService,
    private technicalMapObjectService: TechnicalMapObjectService) { }

  ngOnInit() {
    this.characterDataFetchService.getCharacterInformation().subscribe(
      result => { 
        this.defaultInformation = result["defaultInformation"],
        this.defaultInformationValues = Object.values(this.defaultInformation);
        this.defaultClasses = result["defaultClasses"],
        this.defaultClassesValues = Object.values(this.defaultClasses),
        this.currentClassDescription = this.defaultClasses[this.defaultInformation.cClass.value.toLowerCase()].description
      }
    );
  }

  setSelectedClass(item: string) {
    this.defaultInformation.cClass.value = item;
    this.currentClassDescription = this.defaultClasses[item.toLowerCase()].description
  }

}
