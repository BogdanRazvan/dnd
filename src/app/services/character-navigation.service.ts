import { Injectable } from '@angular/core';

@Injectable()
export class CharacterNavigationService {

  constructor() { }

  public state: Number = 0;
  public stateLength: Number = 6;

  setState(state) {
    this.state = this.state + state;
  }
}
