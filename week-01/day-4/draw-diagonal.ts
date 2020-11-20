
'use strict';

let count: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is
for (let i = 0; i < count; i++) {
  let line: string = '';
  if (i == 0 || i == (count - 1)) {
    for (let j = 0; j < count; j++) {
      line += '%';
    }
    console.log(line);

  } else if (i > 0 && i < (count - 1)) {
    line = '%';
    for (let k = 0; k < count - 2; k++) {
      if (k == (i - 1)) {
        line += '%'
      } else {
        line += ' ';
      }
    }
    line += '%';
    console.log(line);
  }
}