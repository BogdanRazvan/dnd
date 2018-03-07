import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Subscriber } from 'rxjs/Subscriber';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CharacterDataFetchService {
  private serviceUrl = 'http://localhost:4200/character';
  public currentClasss;

  constructor(private http: HttpClient) { }

  currentInformation = new BehaviorSubject([]);
  currentInformationObs = this.currentInformation.asObservable();

  updateInfo(info) {
    this.currentInformation.next(info);
  }

  public getInfo() {
    return this.http.get(this.serviceUrl)
  }
}
