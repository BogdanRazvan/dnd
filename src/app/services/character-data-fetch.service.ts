import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterDataFetchService {

  serviceUrl = 'http://localhost:3000/character';
  constructor(private http: HttpClient) { }
  getCharacterInfo() {
    return this.http.get(this.serviceUrl);
  }
}
