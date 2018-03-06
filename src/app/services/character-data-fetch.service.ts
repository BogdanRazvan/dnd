import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDataFetch } from "./character-data-fetch";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class CharacterDataFetchService {
  private serviceUrl = 'http://localhost:4200/character';
  public currentInformation;
  public currentClasses;

  constructor(private http: HttpClient) { }

  public getDefaultInformation() {
    return this.http.get(this.serviceUrl).subscribe(result =>
        this.currentInformation = Object.values(result["defaultInformation"])
    );
  };

  public getDefaultClasses() {
    return this.http.get(this.serviceUrl).subscribe(result =>
        this.currentClasses = Object.values(result["defaultClasses"])
    );
  };
}
