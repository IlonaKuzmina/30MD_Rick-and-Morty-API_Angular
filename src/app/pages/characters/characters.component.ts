import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription, take } from 'rxjs';
import { CharactersInfo, CharactersResult } from 'src/app/models/users.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters?: CharactersResult[];
  oneCharacter?: CharactersResult;
  info?: CharactersInfo;
  charactersSubscription?: Subscription;
  name: string = '';
  gender: string = '';
  isList: boolean = true;
  id: string = '1';
  shosenParametrs: boolean = true;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (!params['id']) {
        this.isList = true;
        this.getDataFrom();
      } else if (params['id'].length === 1) {
        this.isList = false;
        this.getOneCharacter();
      } else {
        this.shosenParametrs = false;
        this.isList = true;
        this.getMultiplieCharacters(params['id']);
        console.log(params['id']);
      }
    });
    this.getDataFrom();
  }

  getMultiplieCharacters(list: string): void {
    this.charactersSubscription = this.charactersService
      .getMultiplieCharacterList(list)
      .subscribe((response) => {
        this.characters = response;
      });
  }

  getOneCharacter(): void {
    this.charactersSubscription = this.charactersService
      .getOneCharacter(Number(this.id))
      .subscribe((response) => {
        this.oneCharacter = response;
        console.log(this.oneCharacter);
      });
  }

  getDataFrom(): void {
    if (this.shosenParametrs) {
      this.charactersSubscription = this.charactersService
        .searchCharacters(this.name, this.gender)
        .pipe(take(1))
        .subscribe((response) => {
          const { info, results } = response;
          this.characters = results;
          this.info = info;
        });
    }
  }

  setValue(name: string): void {
    if ((name && name.length > 3) || name.length === 0) {
      this.name = name;
    }
    this.getDataFrom();
    this.router.navigate(['/characters'], {
      queryParams: { name: this.name },
      queryParamsHandling: 'merge',
    });
  }

  setGender(gender: string): void {
    this.gender = gender;
    this.getDataFrom();
    this.router.navigate(['/characters'], {
      queryParams: { gender: this.gender },
      queryParamsHandling: 'merge',
    });
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }
}
