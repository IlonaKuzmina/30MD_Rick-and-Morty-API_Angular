import { Component, Input } from '@angular/core';
import { CharactersResult, CharactersResultOrigin } from 'src/app/models/users.model';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.scss'],
})
export class CharactersCardComponent {
  @Input() character: CharactersResult | undefined;
  isClicked = false;

  getEpisodesLength() {
    return this.character?.episode.length;
  }

  getOrigins() {
    return this.character?.origin.name;
  }

  getLocation() {
    return this.character?.location.name;
  }

  getModal() {
    return (this.isClicked = !this.isClicked);
  }
}
