'use strict';

export function isAnagramma(firtsWord: string, secondWord: string): boolean {
  if (firtsWord == ('' || null || undefined)) {
    return false
  }
  if (secondWord == '' || null || undefined) {
    return false   
  }
  let firstLetters: string = firtsWord.split('').sort().join();
  let secondLetters: string = secondWord.split('').sort().join();
  if (firstLetters == secondLetters) {
    return true;
  } else {
    return false;
  }
}

