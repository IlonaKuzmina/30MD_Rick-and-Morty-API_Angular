import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { CharacterComponent } from './pages/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ModalsComponent } from './components/modals/modals.component';
import { LocationCardComponent } from './components/location-card/location-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    LocationsComponent,
    CharacterComponent,
    CharactersCardComponent,
    NavBarComponent,
    ModalsComponent,
    LocationCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, 
    HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
