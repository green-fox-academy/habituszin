'use strict';

export function anagramChecker(inputString1: string, inputString2: string): boolean {
  if ((inputString1 === '') || (inputString2 === '')) {
    return false;
  } if ((inputString1 === undefined) || (inputString2 === undefined)) {
    return false;
  } if ((inputString1 === null) || (inputString2 === null)) {
    return false;
  }
  let first: string = inputString1.split('').sort().join();
  let second: string = inputString2.split('').sort().join();

  if (first == second) {
    return true
  } else {
    return false
  }

};