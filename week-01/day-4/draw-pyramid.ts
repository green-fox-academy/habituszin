'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 0; i < lineCount; i += 1) {
  let starsLine: string = '';
  for (let j = 1; j < lineCount -i; j++) {
    starsLine += ' ';
  }
  for (let k = 1; k <= (2 * i + 1); k++) {
    starsLine += '*';
  }

  console.log(starsLine);

}