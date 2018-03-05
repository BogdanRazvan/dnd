import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDataFetch } from "./character-data-fetch";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { TechnicalMapObjectService } from './technical-map-object.service';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CharacterDataFetchService {

  private serviceUrl = 'http://localhost:4200/character';
  public defaultInformation: Object;
  public defaultClasses: Object;

  constructor(private http: HttpClient, private technicalMapObjectService: TechnicalMapObjectService) { }

  public getCharacterInformation(): Observable<Object> {
    return this.http.get(this.serviceUrl)
  };
}
