import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../../../services/character-update-information.service';

@Component({
  selector: 'app-pick-name',
  templateUrl: './pick-name.component.html'
})
export class PickNameComponent implements OnInit {

  constructor(private characterUpdateInformationService: CharacterUpdateInformationService) {   }

  ngOnInit() {
  }

  getSelectedName(item) {
    this.characterUpdateInformationService.updateName(item);
  }

}
