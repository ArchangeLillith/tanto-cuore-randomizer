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
