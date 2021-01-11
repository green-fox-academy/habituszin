'use strict';

export function calculator(num1: number, num2: number, num3: number, num4: number, num5: number): number {

  let order: number[] = [num1, num2, num3, num4, num5].sort((a, b) => a - b);
  let finalPrize: number = 0;
  while (order[4] > 0) {
    let count = 0;
    for (let i = 0; i < order.length; i++) {
      if (order[i] > 0) {
        order[i]--;
        count++;
      } 
    }
    switch (count) {
      case 1:
        finalPrize += 8;
        break;
      case 2:
        finalPrize += 16 * 0.95;
        break;
      case 3:
        finalPrize += 24 * 0.9;
        break;
      case 4:
        finalPrize += 32 * 0.8;
        break;
      case 5:
        finalPrize += 40 * 0.75;
        break;
    }
  }
  return finalPrize;
}