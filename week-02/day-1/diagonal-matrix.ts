'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array
let count: number = 4;
let matrix = [];
for (let i = 0; i < count; i++) {
  let matrixLine: number[] = [];
  for (let j = 1; j <= count; j++) {
    if (i == count - j) {
      matrixLine.push(1);
    } else {
      matrixLine.push(0);
    }
  }
  matrix.push(matrixLine);
}

matrix.forEach(function (value){
  console.log(value);
  })