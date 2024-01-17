import { Component, OnInit } from '@angular/core';
import { FilterObject } from './Utils/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public filterObject: FilterObject;

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
  }

  title = 'tanto-cuore-randomizer';

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

  eventToggle(event: any) {
    let setName: string = '';
    console.log(event.target.id);
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
    } else {
      this.filterObject.setList.push(setName);
    }
    console.log(this.filterObject.setList);
  }

  filterChange(event: any) {
    let propertyToChange: any = event.target.id;
    console.log(propertyToChange);
    let regex = '^noPreference';
    if (propertyToChange === regex) {
      this.noPreference(propertyToChange);
      return;
    }
    if (
      typeof this.filterObject[propertyToChange as keyof FilterObject] ===
      'boolean'
    ) {
      (this.filterObject[propertyToChange as keyof FilterObject] as any) =
        !this.filterObject[propertyToChange as keyof FilterObject];
      console.log(
        this.filterObject[propertyToChange as keyof FilterObject] as any
      );
    } else {
      //todo pull out after app runs correctly
      alert(
        'trying to toggle a string/number property, should only be assigned to a boolean'
      );
    }
  }
  noPreference(filterId: string) {
    switch (filterId) {
      case 'noPreferenceVictoryPoints':
        this.filterObject.highVictoryPoints = false;
        this.filterObject.lowVictoryPoints = false;
        break;
      case 'noPreferenceLoveCost':
        this.filterObject.highLoveCost = false;
        this.filterObject.lowLoveCost = false;
        break;
      case 'noPreferenceLoveGive':
        this.filterObject.highLoveGive = false;
        this.filterObject.lowLoveGive = false;
        break;
      case 'noPreferenceServings':
        this.filterObject.highServings = false;
        this.filterObject.lowServings = false;
        break;
      case 'noPreferenceDraw':
        this.filterObject.highDraw = false;
        this.filterObject.lowDraw = false;
        break;
      case 'noPreferenceEmployEffects':
        this.filterObject.highEmployEffects = false;
        this.filterObject.lowEmployEffects = false;
        break;
    }
  }
}
