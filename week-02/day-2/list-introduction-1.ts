'use strict';

let names: string[] = [];

console.log(names.length);

names.push('William');

if (names == null) {
  console.log('The list is empty.');
} else {
  console.log('The lis is not empty.');
}

names.push('John');

names.push('Amanda');

console.log(names.length);

console.log(names[2]);

for (let i: number = 0; i < names.length; i++) {
  console.log(names[i]);
}

for (let i: number = 0; i < names.length; i++) {
  console.log((i + 1) + '.' + names[i]);
}

names.splice(1, 1);

for (let i: number = 0; i < names.length; i++) {
  console.log(names[i]);
}

names.splice(0, names.length);

console.log(names);




