import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, filter } from 'rxjs';
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

  filterCheck(filterObject: FilterObject) {
    //calls to check if the object passed in matches any of those
    for (let i = 0; i < this.objectList.length; i++) {
      if (JSON.stringify(filterObject) === JSON.stringify(this.objectList[i])) {
        return "You don't have 10 cards, please use a different combination of options";
      }
    }
    console.log('Filter object passed in:', filterObject);
    return 'Filter Object is fine, returns more thant 10 cards';
  }

  filterCards(cardArray: Card[], filterObject: FilterObject) {
    const cardsToCut: Card[] = [];
    for (let i = 0; i < cardArray.length; i++) {
      const cardToCut = filterByCardProperty(cardArray[i], filterObject);
      if (cardToCut) cardsToCut.push(cardToCut);
    }
    for (let i = 0; i < cardsToCut.length; i++) {
      let deleteThisCardName = cardsToCut[i].name;
      cardArray.find((card) => card.name === deleteThisCardName);
    }
    return cardArray;
  }

  objectList: FilterObject[] = [
    {
      setList: [],
      bannedCards: [],
      sisterInclusion: 0,
      includePrivateMaids: true,
      includeEvents: true,
      includeBuildings: true,
      includeReminecsenses: true,
      forceBeer: true,
      includeCouples: true,
      attackCards: 'no preference', //Other options to include "no attack" and "only attack"
      highVictoryPoints: true,
      lowVictoryPoints: false,
      highLoveCost: true,
      lowLoveCost: false,
      highLoveGive: true,
      lowLoveGive: false,
      highServings: true,
      lowServings: false,
      highDraw: true,
      lowDraw: false,
      highEmployEffects: true,
      lowEmployEffects: false,
    },
  ];
}

function filterByCardProperty(
  card: Card,
  filterObject: FilterObject
): Card | undefined {
  if (card.eventRequired === true && filterObject.includeEvents === false) {
    return card;
  }
  if (
    card.reminescenceRequired === true &&
    filterObject.includeReminecsenses === false
  ) {
    return card;
  }
  if (card.couplesRequired === true && filterObject.includeCouples === false) {
    return card;
  }
  if (card.victoryPoints <= 2 && filterObject.highVictoryPoints === true) {
    return card;
  }
  if (card.victoryPoints >= 2 && filterObject.lowVictoryPoints === true) {
    return card;
  }
  if (card.purchasePrice <= 2 && filterObject.highLoveCost === true) {
    return card;
  }
  if (card.purchasePrice >= 2 && filterObject.lowLoveCost === true) {
    return card;
  }
  if (card.love >= 2 && filterObject.highLoveGive === true) {
    return card;
  }
  if (card.love <= 2 && filterObject.lowLoveGive === true) {
    return card;
  }
  if (card.servings >= 2 && filterObject.highServings === true) {
    return card;
  }
  if (card.servings <= 2 && filterObject.lowServings === true) {
    return card;
  }
  if (card.cardDraw >= 2 && filterObject.highDraw === true) {
    return card;
  }
  if (card.cardDraw <= 2 && filterObject.lowDraw === true) {
    return card;
  }
  return undefined;
}
