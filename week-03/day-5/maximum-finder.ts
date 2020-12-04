'use strict';

let arr: number[] = [1, 4, 45, 6, 10, 8]
let index: number = arr.length - 1;

function maxFinder(numbers: number[], n: number): number {
  if (n > 0) {
    return Math.max(numbers[n], maxFinder(numbers, n - 1));
  }
  return numbers[0];
}
console.log(maxFinder(arr, index));
