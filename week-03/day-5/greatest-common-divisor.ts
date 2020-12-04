'use strict';
let divisor: number = 0;
let greatest: number = 0;

function findGreatestDivisor(smaller: number, bigger: number,): number {
  divisor ++;
  if (divisor <= smaller) {
    if (smaller % divisor == 0 && bigger % divisor == 0) {
      greatest = divisor;
    }
    findGreatestDivisor(smaller, bigger);
    return greatest
  }
  return greatest;
}
console.log(findGreatestDivisor(8, 48));
