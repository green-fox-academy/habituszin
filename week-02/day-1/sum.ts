'use strict'

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
let count: number = 10;

function sum(num: number): number {
  let sumNumbers: number = 0;
  for (let i: number = 0; i <= count; i++) {
    sumNumbers += i;
  }
  return sumNumbers
}

console.log(sum(count));
