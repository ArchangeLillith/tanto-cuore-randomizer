import { Component, Input, Output } from '@angular/core';
import { Card } from 'src/app/Utils/types';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css'],
})
export class CardGridComponent {
  ngOnInit() {
    this.getMaidList();
  }
  @Input() finishedTown: Card[];
  @Output() genericMaidList: string[] = [];

  maidUrlList: string[] = [
    './assets/images/genericMaids/maid1.jpg',
    './assets/images/genericMaids/maid2.jpg',
    './assets/images/genericMaids/maid3.jpg',
    './assets/images/genericMaids/maid4.jpg',
    './assets/images/genericMaids/maid5.jpg',
    './assets/images/genericMaids/maid6.jpg',
    './assets/images/genericMaids/maid7.jpg',
    './assets/images/genericMaids/maid8.jpg',
    './assets/images/genericMaids/maid9.jpg',
    './assets/images/genericMaids/maid10.jpg',
    './assets/images/genericMaids/maid11.jpg',
    './assets/images/genericMaids/maid12.jpg',
    './assets/images/genericMaids/maid13.jpg',
    './assets/images/genericMaids/maid14.jpg',
    './assets/images/genericMaids/maid15.jpg',
    './assets/images/genericMaids/maid16.jpg',
    './assets/images/genericMaids/maid17.jpg',
    './assets/images/genericMaids/maid18.jpg',
    './assets/images/genericMaids/maid19.jpg',
    './assets/images/genericMaids/maid20.jpg',
    './assets/images/genericMaids/maid21.jpg',
    './assets/images/genericMaids/maid22.jpg',
    './assets/images/genericMaids/maid23.jpg',
    './assets/images/genericMaids/maid24.jpg',
    './assets/images/genericMaids/maid25.jpg',
    './assets/images/genericMaids/maid26.jpg',
    './assets/images/genericMaids/maid27.jpg',
    './assets/images/genericMaids/maid28.jpg',
    './assets/images/genericMaids/maid29.jpg',
    './assets/images/genericMaids/maid30.jpg',
    './assets/images/genericMaids/maid31.jpg',
    './assets/images/genericMaids/maid32.jpg',
  ];

  getMaidList() {
    let maidUrlListCopy = [...this.maidUrlList];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * maidUrlListCopy.length);
      this.genericMaidList.push(maidUrlListCopy[index]);
      maidUrlListCopy.splice(index, 1);
    }
  }
}
