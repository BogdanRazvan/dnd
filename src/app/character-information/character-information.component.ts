import { Component, OnInit } from '@angular/core';
import { CharacterUpdateInformationService } from '../character-update-information.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html'
})

export class CharacterInformationComponent implements OnInit {

  constructor(private characterInforService: CharacterUpdateInformationService) { }

  ngOnInit() {
  }

}
