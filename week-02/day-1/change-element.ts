'use strict';

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test
let numbers: number[] = [1, 2, 3, 8, 5, 6];

numbers = numbers.map(function (i){
  if (i == 8) {
    i = 4;
  }
  return i;
});
console.log(numbers[3]);
