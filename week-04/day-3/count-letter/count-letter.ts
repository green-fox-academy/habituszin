'use strict';

export function countLetters(word: string): object {
  let uniqueLetters: object = {};
  
  if (word == ('' || null || undefined)) {
    return uniqueLetters
  }
  
  let letters: string[] = word.split('');

  for (let i: number = 0; i < letters.length; i++) {
    if (Object.keys(uniqueLetters).includes(letters[i]) == false) {
      uniqueLetters[letters[i]] = 0;
    }
  }

  for (let i: number = 0; i < Object.keys(uniqueLetters).length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (Object.keys(uniqueLetters)[i] == letters[j]) {
        uniqueLetters[Object.keys(uniqueLetters)[i]]++;
      }
    }
  }
  return uniqueLetters;
}