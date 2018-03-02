import { Injectable } from '@angular/core';

@Injectable()
export class CharacterNavigationService {
  state: Number = 0;
  constructor() { }

  setState(state) {
    this.state = this.state + state;
  }
}
