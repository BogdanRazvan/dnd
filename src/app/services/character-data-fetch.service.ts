/*
* Fetch info from external sources (json server, database)
**/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CharacterInfo } from '../interfaces/character-info';

@Injectable()
export class CharacterDataFetchService {

  constructor(private http: HttpClient) { }

  private serviceUrl = 'http://localhost:4200/character';

  currentInformation = new BehaviorSubject([]);
  currentInformationObs = this.currentInformation.asObservable();

  public updateInfo(info) {
    this.currentInformation.next(info);
  }

  public getInfo() {
    return this.http.get<Observable<Object>>(this.serviceUrl);
  }
}
