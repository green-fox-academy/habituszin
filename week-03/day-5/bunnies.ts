'use strict';

function sumBunniesEars(bunnies: number): number{
  if (bunnies > 0) {
    return 2 + sumBunniesEars(bunnies - 1);
  }
  return 0;
}
console.log(sumBunniesEars(42));
