'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i = 0; i < lineCount; i ++) {
  let starsLine: string = '';
  if (i < (lineCount / 2)) {
    for (let j = 1; j < lineCount - i; j++) {
      starsLine += ' ';
    }
    for (let k = 1; k <= (2 * i + 1); k++) {
      starsLine += '*';
    }
    console.log(starsLine);
  } else {
    for (let j = 0; j < i; j++) {
      starsLine += ' ';
    }for (let k = 1; k < (lineCount - i) * 2 ; k++) {
      starsLine += '*';
    }
    console.log(starsLine);
  }

}