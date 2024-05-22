import { Component, OnInit } from '@angular/core';
import { FilterObject, Card, TownObject } from './Utils/types';
import { CardFilterService } from './services/card-filter.service';
import { TownService } from './services/town.service';
import createTheTown from './Utils/createTheTown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public filterObject: FilterObject;
  constructor(
    private CardFilterService: CardFilterService,
    private TownService: TownService
  ) {}
  ngOnInit() {
    this.filterObject = {
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
      highVictoryPoints: false,
      lowVictoryPoints: false,
      highLoveCost: false,
      lowLoveCost: false,
      highLoveGive: false,
      lowLoveGive: false,
      highServings: false,
      lowServings: false,
      highDraw: false,
      lowDraw: false,
      highEmployEffects: false,
      lowEmployEffects: false,
    };
    this.TownService.returnSavedTownList().subscribe((townsReturned) => {
      this.savedTownsList = this.savedTownsList.concat(townsReturned);
    });
  }

  cardsPerSet: Card[] = [];
  cardsAfterFilter: Card[] = [];
  title = 'tanto-cuore-randomizer';
  showTowns: boolean = false;
  finishedTown: Card[] = [];
  savedTownsList: TownObject[] = [];
  townDescription: string = '';
  townName: string = '';

  eventToggle(event: any) {
    let setName: string = '';
    switch (event.target.id) {
      case 'Base Set':
        setName = 'base_set';
        break;
      case 'Oktoberfest':
        setName = 'oktoberfest';
        break;
      case 'Promotional':
        setName = 'promo';
        break;
      case 'Romantic Vacation':
        setName = 'romantic_vacation';
        break;
      case 'Winter Romance':
        setName = 'winter_romance';
        break;
      case 'Expanding the House':
        setName = 'expanding_the_house';
        break;
    }

    const setIndex: number = this.filterObject.setList.indexOf(setName);
    if (setIndex !== -1) {
      this.filterObject.setList.splice(setIndex, 1);
      this.cardsPerSet = this.cardsPerSet.filter(function (setName) {
        setName !== setName;
      });
    } else {
      this.filterObject.setList.push(setName);
      this.CardFilterService.returnSetCards(setName).subscribe((cardReturn) => {
        this.cardsPerSet = this.cardsPerSet.concat(cardReturn);
        this.callFilterCheck();
      });
    }
  }

  dropdownChange(event: any) {
    let newFilterValue = event.target.value;
    this.filterObject.sisterInclusion = newFilterValue;
  }

  filterChange(event: any, type: string) {
    let propertyToChange: any = event.target.id;
    let preferenceRegex = new RegExp('^noPreference');
    let preferenceBoolean = preferenceRegex.test(propertyToChange);
    if (preferenceBoolean === true) {
      this.noPreferenceFilterToggle(propertyToChange);
      return;
    } else {
      this.booleanFilterValueToggle(propertyToChange, type);
    }
  }

  noPreferenceFilterToggle(filterId: string) {
    switch (filterId) {
      case 'noPreferenceVictoryPoints':
        this.filterObject.highVictoryPoints = false;
        this.filterObject.lowVictoryPoints = false;
        this.callFilterCheck();
        break;
      case 'noPreferenceLoveCost':
        this.filterObject.highLoveCost = false;
        this.filterObject.lowLoveCost = false;
        this.callFilterCheck();
        break;
      case 'noPreferenceLoveGive':
        this.filterObject.highLoveGive = false;
        this.filterObject.lowLoveGive = false;
        this.callFilterCheck();
        break;
      case 'noPreferenceServings':
        this.filterObject.highServings = false;
        this.filterObject.lowServings = false;
        this.callFilterCheck();
        break;
      case 'noPreferenceDraw':
        this.filterObject.highDraw = false;
        this.filterObject.lowDraw = false;
        this.callFilterCheck();
        break;
      case 'noPreferenceEmployEffects':
        this.filterObject.highEmployEffects = false;
        this.filterObject.lowEmployEffects = false;
        this.callFilterCheck();
        break;
    }
  }

  booleanFilterValueToggle(propertyToChange: any, type: string) {
    if (
      typeof this.filterObject[propertyToChange as keyof FilterObject] ===
      'boolean'
    ) {
      if (type !== 'slantType') {
        (this.filterObject[propertyToChange as keyof FilterObject] as any) =
          !this.filterObject[propertyToChange as keyof FilterObject];
      }

      if (type === 'slantType' && propertyToChange.includes('high')) {
        let mutexProperty = propertyToChange.replace(/high/gi, 'low');
        (this.filterObject[mutexProperty as keyof FilterObject] as any) = false;
        (this.filterObject[propertyToChange as keyof FilterObject] as any) =
          true;
        this.callFilterCheck();
      }

      if (type === 'slantType' && propertyToChange.includes('low')) {
        let mutexProperty = propertyToChange.replace(/low/gi, 'high');
        (this.filterObject[mutexProperty as keyof FilterObject] as any) = false;
        (this.filterObject[propertyToChange as keyof FilterObject] as any) =
          true;
        this.callFilterCheck();
      }
    }
  }

  callFilterCheck() {
    if (
      this.CardFilterService.filterCheck(this.cardsPerSet, this.filterObject)
        .length < 10
    ) {
      alert("This town doesn't have 10 cards");
    } else {
      this.cardsAfterFilter = this.CardFilterService.filterCheck(
        this.cardsPerSet,
        this.filterObject
      );
    }
  }
  writeNameOfTown(event: any) {
    this.townName = event.target.value;
  }

  writeDescriptionOfTown(event: any) {
    this.townDescription = event.target.value;
  }
  showTownsToggle() {
    this.showTowns = true;
    console.log(`town toggle hit`);
  }

  saveTown() {
    if (
      this.finishedTown.length < 10 ||
      this.townDescription === '' ||
      this.townName === ''
    ) {
      alert('Please enter values into the name and description of the town!');
      return;
    }
    this.TownService.saveTown(
      this.finishedTown,
      this.townDescription,
      this.townName
    );
  }
  btnClick() {
    const townMaterial = this.CardFilterService.filterCheck(
      this.cardsPerSet,
      this.filterObject
    );
    console.log(`Cards in Town Material:`, townMaterial);
    let town = createTheTown(townMaterial);
    if (town.length !== 10) {
      alert("Town isn't 10 long");
    } else {
      this.finishedTown = town;
      console.log(`TOWN:`, this.finishedTown);
    }
  }

  setArray: string[] = [
    'Base Set',
    'Expanding the House',
    'Romantic Vacation',
    'Oktoberfest',
    'Winter Romance',
    'Promotional',
  ];
  eventString: string[] = [
    'Exclude all cards that affect or require Event cards',
  ];
  buildingString: string[] = [
    'Exclude all cards that affect or require Building cards',
  ];

  privateMaidString: string[] = [
    'Exclude all cards that affect or require  Private Maid cards',
  ];
  sistersString: string[] = [
    'If a sister is chosen, force include how many more sisters?',
  ];
  reminecenseOptions: string[] = [
    'No preference on Reminiscence cards',
    'Ensure a cost spread that permits all Reminiscence cards to be played',
    'Exclude all cards that affect or require Reminiscence cards',
  ];
  beerOptions: string[] = [
    'Ensure at least one bar maid in results to allow beer cards to be utilized',
    'Exclude all cards that affect or require Beer cards',
  ];
  coupleString: string[] = [
    'Do not use Winter Romance approach/couple mechanics',
  ];

  sets: any = [
    {
      topOptionText: 'High Victory Points',
      topOptionId: 'highVictoryPoints',
      middleOptionText: 'Low Victory Points',
      middleOptionId: 'lowVictoryPoints',
      bottomOptionId: 'noPreferenceVictoryPoints',
    },
    {
      topOptionText: 'High Love Cost',
      topOptionId: 'highLoveCost',
      middleOptionText: 'Low Love Cost',
      middleOptionId: 'lowLoveCost',
      bottomOptionId: 'noPreferenceLoveCost',
    },
    {
      topOptionText: 'High Love Give',
      topOptionId: 'highLoveGive',
      middleOptionText: 'Low Love Give',
      middleOptionId: 'lowLoveGive',
      bottomOptionId: 'noPreferenceLoveGive',
    },
    {
      topOptionText: 'High Servings',
      topOptionId: 'highServings',
      middleOptionText: 'Low Servings',
      middleOptionId: 'lowServings',
      bottomOptionId: 'noPreferenceServings',
    },
    {
      topOptionText: 'High Draw',
      topOptionId: 'highDraw',
      middleOptionText: 'Low Draw',
      middleOptionId: 'lowDraw',
      bottomOptionId: 'noPreferenceDraw',
    },
    {
      topOptionText: 'Lots of Employ Effects',
      topOptionId: 'highEmployEffects',
      middleOptionText: 'No Employ Effects',
      middleOptionId: 'lowEmployEffects',
      bottomOptionId: 'noPreferenceEmployEffects',
    },
  ];
}

//FAKE TOWN
// {
//   name: 'Moine de Lefevre',
//   cardTitle: 'Employing Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 4,
//   cardDraw: 2,
//   employs: 2,
//   servings: 0,
//   love: 0,
//   cardID: 11,
//   set: 'base_set',
// },
// {
//   name: 'Sainsbury Lockwood',
//   cardTitle: 'Laundry Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 5,
//   cardDraw: 0,
//   employs: 0,
//   servings: 0,
//   love: 0,
//   cardID: 5,
//   set: 'base_set',
// },
// {
//   name: 'Ophelia Grail',
//   cardTitle: 'All-Purpose Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 2,
//   negativeVP: true,
//   purchasePrice: 6,
//   cardDraw: 1,
//   employs: 1,
//   servings: 1,
//   love: 1,
//   cardID: 4,
//   set: 'base_set',
// },
// {
//   name: 'Genevieve Daubigny',
//   cardTitle: 'Cooking Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 4,
//   cardDraw: 1,
//   employs: 0,
//   servings: 1,
//   love: 1,
//   cardID: 10,
//   set: 'base_set',
// },
// {
//   name: 'Claire Saint-Juste',
//   cardTitle: 'White Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: true,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 3,
//   cardDraw: 0,
//   employs: 0,
//   servings: 1,
//   love: 0,
//   cardID: 14,
//   set: 'base_set',
// },
// {
//   name: 'Tenalys Trent',
//   cardTitle: 'Nap Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 5,
//   cardDraw: 0,
//   employs: 1,
//   servings: 0,
//   love: 3,
//   cardID: 6,
//   set: 'base_set',
// },
// {
//   name: 'Natsumi Fujikawa',
//   cardTitle: 'Cleaning Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 5,
//   cardDraw: 1,
//   employs: 0,
//   servings: 2,
//   love: 0,
//   cardID: 7,
//   set: 'base_set',
// },
// {
//   name: 'Rouge Crescent',
//   cardTitle: 'Chambermaid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: true,
//   crescentSister: true,
//   stackingVP: true,
//   victoryPoints: 1,
//   negativeVP: false,
//   purchasePrice: 2,
//   cardDraw: 0,
//   employs: 0,
//   servings: 0,
//   love: 1,
//   cardID: 18,
//   set: 'base_set',
// },
// {
//   name: 'Safran Virginie',
//   cardTitle: 'Chambermaid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: false,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: true,
//   crescentSister: false,
//   stackingVP: true,
//   victoryPoints: 1,
//   negativeVP: false,
//   purchasePrice: 3,
//   cardDraw: 0,
//   employs: 0,
//   servings: 0,
//   love: 2,
//   cardID: 15,
//   set: 'base_set',
// },
// {
//   name: 'Nena Wilder',
//   cardTitle: 'Teasing Maid',
//   pictureUrl: null,
//   promo: false,
//   employEffect: false,
//   chiefMaid: false,
//   beerMaid: false,
//   eventRequired: true,
//   couplesRequired: false,
//   reminescenceRequired: false,
//   chamberMaid: false,
//   crescentSister: false,
//   stackingVP: false,
//   victoryPoints: 0,
//   negativeVP: false,
//   purchasePrice: 5,
//   cardDraw: 0,
//   employs: 0,
//   servings: 0,
//   love: 1,
//   cardID: 8,
//   set: 'base_set',
// },
