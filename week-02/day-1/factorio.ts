'use strict'

// -  Create a function called `factorio`
//    that returns it's input's factorial
let inpitNumber: number = 5;

function factorio(num: number): number {
  let prevNumber: number = 1;
  for (let i: number = 1; i <= inpitNumber; i++) {
    prevNumber *= i
  }
  return prevNumber
};

console.log(factorio(inpitNumber));
