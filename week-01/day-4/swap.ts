'use strict';

// Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

let numberOne: number = numberToSwap1;
let numberTwo: number = numberToSwap2;
numberToSwap1 = numberTwo;
numberToSwap2 = numberOne;

console.log(numberToSwap1);
console.log(numberToSwap2);