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
  highLove: boolean;
  highDraw: boolean;
  highEmployEffects: boolean;
  highAmountOfLowCost: boolean;
};
