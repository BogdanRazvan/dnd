import { Injectable } from '@angular/core';
import { CharacterInformation } from './character-information-interface.component';

@Injectable()
export class CharacterUpdateInformationService {
  defaults: CharacterInformation = {
    cName: ['Character Name', 'Lyle', 'Barrelbottom'],
    cClassLevel: ['Class & Level', 'Barbarian', 1],
    pName: ['Player Name', 'Razvan'],
    pRace: ['Race', 'Human'],
    cBackground: ['Background', 'Noble'],
    cAlignement: ['Alignemnet', 'Chaotic', 'Good'],
    cExperience: ['Experience', 0]
  };

  character = Object.assign({}, this.defaults);
  constructor() { }

  updateClass(item: string) {
    this.character.cClassLevel[1] = item;
  }

  updateName(item: string) {
    this.character.cName[1] = item;
  }

}
