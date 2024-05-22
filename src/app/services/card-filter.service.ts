import { Injectable } from '@angular/core';
import { FilterObject } from '../Utils/types';
import { Card } from '../Utils/types';

@Injectable({
  providedIn: 'root',
})
export class CardFilterService {
  constructor() {}

  //A lightweight call to the filter that can be initated to show dynamic UI when a town doesn't have ten cards
  filterCheck(cardsPerSet: Card[], filterObject: FilterObject) {
    const cardsThatMatchFilters = this.filterCards(cardsPerSet, filterObject);
    return cardsThatMatchFilters;
  }
  //The filter method to handle the fine grain filtering, calling other funtions to fully filter the array to the users specification
  filterCards(cardArray: Card[], filterObject: FilterObject) {
    const chosenMaidChiefs: Card[] = this.chooseChambermaidChiefs(cardArray);
    const cardsToCut: Card[] = [];
    //Passes in the card to the filter method and expects a card or undefined as a return. If a card is returned, it gets added to the cards to cut array and then removed subsequently
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

  //The method to choose the chiefs from the sets the user has selected
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

//The fine grain, by the selection filtering of the array. A card is passed in and has to pass all the checks. If undefined is returned, the card does not need to be cut, but if the card is returned it's added to a list of cards to be removed which is handled at a higher level
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
