import { Component, OnInit } from '@angular/core';
import { GeneralInfo } from "./general-info-interface.component";

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})

export class GeneralInfoComponent implements OnInit {

  defaults: GeneralInfo = {
    class: "Barbarian",
    level: 1,
    playername: "Razvan",
    race: "Human",
    background: "Noble",
    alignement: ["Chaotic", "Good"],
    experience: 0
  }

  character = Object.assign({}, this.defaults);

  componentParts = [
    ["class_level", "Class & Level", `${this.character.class} ${this.character.level}`],
    ["name", "Name", this.character.playername],
    ["race", "Race", this.character.race],
    ["alignement", "Alignement", this.character.alignement == "neutral" ? 
      "neutral" : `${this.character.alignement[0]} ${this.character.alignement[1]}`],
    ["experience", "Experience", this.character.experience]
  ]
  constructor() { }

  ngOnInit() {
  }

}
