import { Injectable } from '@angular/core';

@Injectable()
export class CharacterUpdateInformationService {

  defaults = [
    ['Character Name', 'Lyle', 'Barrelbottom'],
    ['Class & Level', 'Barbarian', 1],
    ['Player Name', 'Razvan'],
    ['Race', 'Human'],
    ['Background', 'Noble'],
    ['Alignemnet', 'Chaotic', 'Good'],
    ['Experience', 0]
  ];

  character = Array.from(this.defaults);

  constructor() { }

  updateItem(item: string) {
    this.character[1][1] = item;
  }

}
