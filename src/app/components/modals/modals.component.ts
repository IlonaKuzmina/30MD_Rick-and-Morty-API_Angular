import { Component, Input, OnInit } from '@angular/core';
import { CharactersResult } from 'src/app/models/users.model';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent {
  @Input() character: CharactersResult | undefined;
  
}
