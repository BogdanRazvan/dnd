import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../../services/character-update-information.service';
import { TechnicalMapObjectService } from '../../services/technical-map-object.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html'
})

export class CharacterInformationComponent implements OnInit {

  constructor(private characterInfoService: CharacterUpdateInformationService,
    private technicalMapObjectService: TechnicalMapObjectService) { }

  ngOnInit() {
  }

}
