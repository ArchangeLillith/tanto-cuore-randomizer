export type FilterObject = {
  setList: string[];
  bannedCards: string[];
  sisterInclusion: number;
  includePrivateMaids: boolean;
  includeEvents: boolean;
  includeBuildings: boolean;
  includeReminecsenses: boolean;
  forceBeer: boolean;
  includeCouples: boolean;
  attackCards: string; //Other options to include "no attack" and "only attack"
  highVictoryPoints: boolean;
  lowVictoryPoints: boolean;
  highLoveCost: boolean;
  lowLoveCost: boolean;
  highLoveGive: boolean;
  lowLoveGive: boolean;
  highServings: boolean;
  lowServings: boolean;
  highDraw: boolean;
  lowDraw: boolean;
  highEmployEffects: boolean;
  lowEmployEffects: boolean;
};

//Creating an interface which governs in TS what data has to be, basically a filter layer that'll get mad if soemthing is typed wrong
export type Card = {
  name: string;
  cardTitle: string;
  pictureUrl: string | null;
  promo: boolean;
  employEffect: boolean;
  chiefMaid: boolean;
  beerMaid: boolean;
  eventRequired: boolean;
  couplesRequired: boolean;
  reminescenceRequired: boolean;
  chamberMaid: boolean;
  crescentSister: boolean;
  stackingVP: boolean;
  victoryPoints: number;
  negativeVP: boolean;
  purchasePrice: number;
  cardDraw: number;
  employs: number;
  servings: number;
  love: number;
  cardID: number;
  set: string;
};
export type CardInTown = {
  name: string;
  set: string;
};

export type TownObject = {
  name: string;
  description: string;
  cards: CardInTown[];
  id: number;
};

export type DatabaseObject = {
  base_set: DatabaseCard[];
  expanding_the_house: DatabaseCard[];
  oktoberfest: DatabaseCard[];
  winter_romance: DatabaseCard[];
  romantic_vacation: DatabaseCard[];
};

type DatabaseCard = {
  name: string;
  cardTitle: string;
  pictureUrl: string;
  promo: boolean;
  employEffect: boolean;
  chiefMaid: boolean;
  beerMaid: boolean;
  eventRequired: boolean;
  couplesRequired: boolean;
  reminescenceRequired: boolean;
  chamberMaid: boolean;
  crescentSister: boolean;
  stackingVP: boolean;
  victoryPoints: number;
  negativeVP: boolean;
  purchasePrice: number;
  cardDraw: number;
  employs: number;
  servings: number;
  love: number;
  cardID: number;
  set: string;
  id: number;
};
