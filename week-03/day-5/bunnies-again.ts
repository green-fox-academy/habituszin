'use strict';

function sumFunnyBunnies(bunnies: number): number {
  if (bunnies > 0 && bunnies % 2 == 0) {
    return 3 + sumFunnyBunnies(bunnies - 1);
  }
  else if (bunnies > 0 && bunnies % 2 == 1) {
    return 2 + sumFunnyBunnies(bunnies - 1);
  }
  return 0;
}

console.log(sumFunnyBunnies(5));
