import { Component, OnInit } from '@angular/core';
import { CharacterNavigationService } from '../../services/character-navigation.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html'
})
export class CharacterCreationComponent implements OnInit {

  constructor(private characterNavigationService: CharacterNavigationService) { }

  ngOnInit() {
  }

}
