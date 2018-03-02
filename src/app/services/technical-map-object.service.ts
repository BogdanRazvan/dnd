import { Injectable } from '@angular/core';

@Injectable()
export class TechnicalMapObjectService {

  constructor() { }

  generateArray(obj: Object) {
    return Object.keys(obj).map((key) => obj[key]);
  }
}
