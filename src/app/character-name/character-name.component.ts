import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css']
})
export class CharacterNameComponent implements OnInit {
  characterName = "Lyle Barrelbottom"
  constructor() { }

  ngOnInit() {
  }

}
