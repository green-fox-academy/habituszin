'use strict';

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string[] = ['Arthur', 'Boe', 'Chloe'];
let nameOne: string = names[0];
let nameTwo: string = names[2];

names[0] = nameTwo;
names[2] = nameOne;

console.log(names);
