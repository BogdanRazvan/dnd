import { Component, OnInit } from '@angular/core';
import { CharacterDataFetchService } from './services/character-data-fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private characterDataFetchService: CharacterDataFetchService) {}
  ngOnInit() {
  }

}
