import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class CharacterDataFetchService {

  serviceUrl = 'http://localhost:4200/character';
  constructor(private http: HttpClient) { }
  getCharacterInfo() {
    return this.http.get(this.serviceUrl);
  }
}
