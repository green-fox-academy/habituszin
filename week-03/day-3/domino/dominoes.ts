'use strict';

import { loadavg } from "os";
import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2));
  dominoes.push(new Domino(4, 6));
  dominoes.push(new Domino(1, 5));
  dominoes.push(new Domino(6, 7));
  dominoes.push(new Domino(2, 4));
  dominoes.push(new Domino(7, 1));
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(dominoes);

function makeSnake(listOfDominoes: Domino[]): void {
  let snake: number[][] = [];
  listOfDominoes = listOfDominoes.slice();
  for (let i = 0; i < listOfDominoes.length; i++) {
    for (let j = 0; j < listOfDominoes.length - 1; j++) {
      if (listOfDominoes[j].values[1] > listOfDominoes[j + 1].values[0]) {
        [listOfDominoes[j], listOfDominoes[j + 1]] = [listOfDominoes[j + 1], listOfDominoes[j]];
      }
    }
  }
  for (let i = 0; i < listOfDominoes.length; i++) {
    snake.push(listOfDominoes[i].values)
  }

  console.log(snake);

}

makeSnake(dominoes);