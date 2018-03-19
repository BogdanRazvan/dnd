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
import { PickNameLevelComponent } from './components/character-creation/pick-name-level/pick-name-level.component';

import { CharacterDataFetchService } from './services/character-data-fetch.service';
import { CharacterNavigationService } from './services/character-navigation.service';
import { PickBackgroundComponent } from './components/character-creation/pick-background/pick-background.component';
import { ShowBackgroundComponent } from './components/character-information/show-background/show-background.component';

@NgModule({
  declarations: [
    AppComponent,
    PickClassComponent,
    CharacterInformationComponent,
    CharacterCreationComponent,
    CharacterCreationNavigationComponent,
    PickNameLevelComponent,
    PickBackgroundComponent,
    ShowBackgroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CharacterDataFetchService,
    CharacterNavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
