import { Component, OnInit } from '@angular/core';
import { CharacterNavigationService } from "../../../services/character-navigation.service"

@Component({
  selector: 'app-character-creation-navigation',
  templateUrl: './character-creation-navigation.component.html'
})
export class CharacterCreationNavigationComponent implements OnInit {

  constructor(private characterNavigationService: CharacterNavigationService) { }

  ngOnInit() {
  }

  previousPhase() {
    this.characterNavigationService.setState(-1);
  }

  nextPhase() {
    this.characterNavigationService.setState(1);
    console.log("here");
  }

}
