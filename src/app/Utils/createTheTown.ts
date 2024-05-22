import { Card } from './types';

//Intakes the array of filtered cards and selects 10 at random to return as the town
export default function createTheTown(cardArray: Card[]) {
  const finishedTown: Card[] = [];
  while (finishedTown.length < 10) {
    let index = Math.floor(Math.random() * cardArray.length);
    finishedTown.push(cardArray[index]);
    cardArray.splice(index, 1);
  }
  return finishedTown;
}
