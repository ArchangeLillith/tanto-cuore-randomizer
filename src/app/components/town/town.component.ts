import { Component, Input } from '@angular/core';
import { CardInTown } from 'src/app/Utils/types';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.css'],
})

export class TownComponent {
  @Input() town: any;
  ngOnInit() {
    this.sortedTown = this.town.Cards.sort(function (a: any, b: any) {
      if (a.set < b.set) {
        return -1;
      }
      if (a.set > b.set) {
        return 1;
      }
      return 0;
    });
    console.log('Sorted town', this.sortedTown);
  }
  sortedTown: any = [];
}
