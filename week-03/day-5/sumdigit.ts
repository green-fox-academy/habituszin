'use strict';

function sumDigits(n: number): number {
  if (n < 10) {
    return 1;
  }
  return n % 10 + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(34234));
