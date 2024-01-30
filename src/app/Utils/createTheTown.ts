import { Card } from './types';

export default function createTheTown(cardArray: Card[]) {
  const finishedTown: Card[] = [];
  while (finishedTown.length < 10) {
    let index = Math.floor(Math.random() * cardArray.length);
    finishedTown.push(cardArray[index]);
    cardArray.splice(index, 1);
  }
  return finishedTown;
}
