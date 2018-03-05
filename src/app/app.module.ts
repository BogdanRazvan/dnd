import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PickClassComponent } from './components/character-creation/pick-class/pick-class.component';
import { CharacterInformationComponent } from './components/character-information/character-information.component';
import { CharacterCreationComponent } from './components/character-creation/character-creation.component';
// tslint:disable-next-line:max-line-length
import { CharacterCreationNavigationComponent } from './components/character-creation/character-creation-navigation/character-creation-navigation.component';
import { PickNameComponent } from './components/character-creation/pick-name/pick-name.component';

import { CharacterDataFetchService } from './services/character-data-fetch.service';
import { CharacterNavigationService } from './services/character-navigation.service';
import { TechnicalMapObjectService } from './services/technical-map-object.service';

@NgModule({
  declarations: [
    AppComponent,
    PickClassComponent,
    CharacterInformationComponent,
    CharacterCreationComponent,
    CharacterCreationNavigationComponent,
    PickNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CharacterDataFetchService,
    CharacterNavigationService,
    TechnicalMapObjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
