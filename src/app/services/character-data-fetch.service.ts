import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { TechnicalMapObjectService } from './technical-map-object.service';

@Injectable()
export class CharacterDataFetchService {

  serviceUrl = 'http://localhost:4200/character';
  defaultInformation: Object;
  defaultClasses: Object;

  constructor(private http: HttpClient, private technicalMapObjectService: TechnicalMapObjectService) { }

  getCharacterInformation() {
    return this.http.get(this.serviceUrl).subscribe(
      data => this.defaultInformation = this.technicalMapObjectService.generateArray(data['defaultInformation']));
  }

  getCharacterClass() {
    return this.http.get(this.serviceUrl).subscribe(
      data => this.defaultClasses = this.technicalMapObjectService.generateArray(data['defaultClasses']));
  }
}
