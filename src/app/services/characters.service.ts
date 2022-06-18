import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters, CharactersResult } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  getMultiplieCharacter(list: any) {
    throw new Error('Method not implemented.');
  }
  getCharacters() {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  searchCharacters(name = '', gender = ''): Observable<Characters> {
    return this.http.get<Characters>(
      `${this.baseUrl}?name=${name}&gender=${gender}`
    );
  }

  getOneCharacter(id: number) {
    return this.http.get<CharactersResult>(`${this.baseUrl}${id}`);
  }

  getMultiplieCharacterList(list: string) {
    return this.http.get<CharactersResult[]>(`${this.baseUrl}${list}`);
  }
}
