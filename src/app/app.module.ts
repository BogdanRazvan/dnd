import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { CharacterNameComponent } from './character-name/character-name.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralInfoComponent,
    CharacterNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
