import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterDataFetchService {

  serviceUrl = 'http://localhost:3004/character';
  constructor(private http: HttpClient) { }
  getCharacterInfo() {
    return this.http.get(this.serviceUrl);
  }
}
