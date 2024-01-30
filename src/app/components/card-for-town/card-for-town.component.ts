import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/Utils/types';

@Component({
  selector: 'app-card-for-town',
  templateUrl: './card-for-town.component.html',
  styleUrls: ['./card-for-town.component.css'],
})
export class CardForTownComponent {
  @Input() genericMaidUrl: string;
  @Input() card: Card;
  cardWithoutPicture: boolean;
  noLove: Card[] = [];
}
