import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { CharacterDetailsInterface } from './character-details-interface';

@Injectable()
export class CharacterDataFetchService {

  serviceUrl = 'http://localhost:3004/character';
  constructor(private http: HttpClient) { }
  getCharacterInfo() {
    return this.http.get<CharacterDetailsInterface>(this.serviceUrl).map(data => data.defaultClasses);
  }
}
