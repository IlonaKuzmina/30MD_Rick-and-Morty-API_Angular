import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationsData } from '../models/locations.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  baseUrl = 'https://rickandmortyapi.com/api/location/';

  constructor(private http: HttpClient) {}

  getAndSearchLocation(location = '', dimension = ''): Observable<LocationsData> {
    return this.http.get<LocationsData>(
      `${this.baseUrl}?name=${location}&dimension=${dimension}`
    );
  }
}
