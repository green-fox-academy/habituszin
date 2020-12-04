'use strict';

function fibonacci(n: number): number {
  if (n > 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  if (n == 2) {
    return 1;
  } 
  return 0
}

console.log(fibonacci(6));
