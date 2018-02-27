import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PickClassComponent } from './character-creation/pick-class/pick-class.component';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { CharacterCreationComponent } from './character-creation/character-creation.component';

import { CharacterUpdateInformationService } from './character-update-information.service';


@NgModule({
  declarations: [
    AppComponent,
    PickClassComponent,
    CharacterInformationComponent,
    CharacterCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CharacterUpdateInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
