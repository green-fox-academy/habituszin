'use strict';

export function calcFibonacciElement(n: number): number {
  if (n == (null || undefined) || n < 0) {
    return 0;
  }
  if (n > 2) {
    return calcFibonacciElement(n - 1) + calcFibonacciElement(n - 2);
  }
  if (n == 2) {
    return 1;
  }
  return 0
}

