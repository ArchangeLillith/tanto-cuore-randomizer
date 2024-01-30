import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, filter, first } from 'rxjs';
import { FilterObject } from '../Utils/types';
import { Card } from '../Utils/types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CardFilterService {
  constructor(private http: HttpClient) {}

  returnSetCards(setRequested: Object): Observable<any> {
    const url = `http://localhost:5000/${setRequested}`;
    return this.http.get<any>(url, httpOptions);
  }

  filterCheck(cardsPerSet: Card[], filterObject: FilterObject) {
    const cardsThatMatchFilters = this.filterCards(cardsPerSet, filterObject);
    return cardsThatMatchFilters;
  }

  filterCards(cardArray: Card[], filterObject: FilterObject) {
    const chosenMaidChiefs: Card[] = this.chooseChambermaidChiefs(cardArray);
    const cardsToCut: Card[] = [];
    for (let i = 0; i < cardArray.length; i++) {
      const cardToCut = filterByCardProperty(cardArray[i], filterObject);
      if (cardToCut) cardsToCut.push(cardToCut);
    }

    for (let i = 0; i < cardsToCut.length; i++) {
      let deleteThisCardName = cardsToCut[i].name;
      cardArray = cardArray.filter((card) => card.name !== deleteThisCardName);
    }
    return cardArray;
  }

  chooseChambermaidChiefs(cardArray: Card[]) {
    const maidChiefs: Card[] = [];
    for (let i = 0; i < cardArray.length; i++) {
      if (cardArray[i].chiefMaid === true) {
        maidChiefs.push(cardArray[i]);
      }

      if (maidChiefs.length === 2) {
        return maidChiefs;
      }
    }
    //do this with a for loop?? or a do while
    const randomizedChiefs: Card[] = [];
    let firstMaidIndex = Math.floor(Math.random() * maidChiefs.length);
    randomizedChiefs.push(maidChiefs[firstMaidIndex]);
    maidChiefs.splice(firstMaidIndex, 1);

    let secondMaidIndex = Math.floor(Math.random() * maidChiefs.length);
    randomizedChiefs.push(maidChiefs[secondMaidIndex]);
    return randomizedChiefs;
  }
}

function filterByCardProperty(
  card: Card,
  filterObject: FilterObject
): Card | undefined {
  //kick out the chief maids
  if (card.chiefMaid === true) {
    return card;
  }
  //event filter
  if (card.eventRequired === true && filterObject.includeEvents === false) {
    return card;
  }
  //reminecense filter
  if (
    card.reminescenceRequired === true &&
    filterObject.includeReminecsenses === false
  ) {
    return card;
  }
  //couple filter
  if (card.couplesRequired === true && filterObject.includeCouples === false) {
    return card;
  }
  //Slant options start:
  if (card.victoryPoints <= 2 && filterObject.highVictoryPoints === true) {
    return card;
  }
  if (card.victoryPoints > 2 && filterObject.lowVictoryPoints === true) {
    return card;
  }
  if (card.purchasePrice <= 2 && filterObject.highLoveCost === true) {
    return card;
  }
  if (card.purchasePrice > 2 && filterObject.lowLoveCost === true) {
    return card;
  }
  if (card.love <= 2 && filterObject.highLoveGive === true) {
    return card;
  }
  if (card.love > 2 && filterObject.lowLoveGive === true) {
    return card;
  }
  if (card.servings < 2 && filterObject.highServings === true) {
    return card;
  }
  if (card.servings >= 2 && filterObject.lowServings === true) {
    return card;
  }
  if (card.cardDraw <= 2 && filterObject.highDraw === true) {
    return card;
  }
  if (card.cardDraw > 2 && filterObject.lowDraw === true) {
    return card;
  }
  return undefined;
}
