import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PickClassComponent } from './components/character-creation/pick-class/pick-class.component';
import { CharacterInformationComponent } from './components/character-information/character-information.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';

import { CharacterUpdateInformationService } from './services/character-update-information.service';
import { CharacterDataFetchService } from './services/character-data-fetch.service';


@NgModule({
  declarations: [
    AppComponent,
    PickClassComponent,
    CharacterInformationComponent,
    CharacterCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CharacterUpdateInformationService, CharacterDataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
