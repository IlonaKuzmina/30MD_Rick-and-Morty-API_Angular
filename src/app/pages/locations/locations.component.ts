import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationResult } from 'src/app/models/locations.model';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations?: LocationResult[];
  locationsSubscription?: Subscription;
  location: string = '';
  dimension: string = '';

  constructor(
    private locationsService: LocationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLocationsData();
  }

  getLocationsData(): void {
    this.locationsSubscription = this.locationsService
      .getAndSearchLocation(this.location, this.dimension)
      .subscribe((response) => {
        const { results } = response;
        this.locations = results;
      });
  }

  setLocation(location: string) {
    this.location = location;
    this.getLocationsData();
    this.router.navigate(['/locations'], {
      queryParams: { location: this.location },
      queryParamsHandling: 'merge',
    });
    console.log(this.location);
  }
  setDimension(dimension: string) {
    this.dimension = dimension;
    this.getLocationsData();
    this.router.navigate(['/locations'], {
      queryParams: { dimension: this.dimension },
      queryParamsHandling: 'merge',
    });
    console.log(this.dimension)
  }

  ngOnDestroy(): void {
    this.locationsSubscription?.unsubscribe();
  }
}
