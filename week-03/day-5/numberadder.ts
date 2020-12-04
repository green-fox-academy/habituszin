' use strict';

function numberAdder(n: number): number{
  if (n == 1) {
    return 1;
  }
  return n + numberAdder(n-1);
}

console.log(numberAdder(10));
