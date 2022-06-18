import { Component, Input } from '@angular/core';
import { LocationResult } from 'src/app/models/locations.model';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
  @Input() location: LocationResult | undefined;

  getResidentsCount() {
    return this.location?.residents.length;
  }
}
