import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../../character-update-information.service';

@Component({
  selector: 'app-pick-class',
  templateUrl: './pick-class.component.html'
})
export class PickClassComponent implements OnInit {

  classes: string[] = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk',
   'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Worlock', 'Wizard'];
  constructor(private characterInforService: CharacterUpdateInformationService ) { }

  ngOnInit() {
  }

  getSelectedClass(item: string) {
    this.characterInforService.updateItem(item);
  }

}
