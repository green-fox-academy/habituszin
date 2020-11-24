'use strict';
let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = [];
listB = listB.concat(listA);

if (listA.includes('Durian')) {
  console.log('This list is include durian.');
} else {
  console.log('This list is not include durian.');
}

listB.splice(listB.indexOf('Durian'), 1);

listA.splice(4, 0, 'KiWifruit');

if (listA.length > listB.length) {
  console.log('ListA have more element.');
} else {
  console.log('ListB have more element.');
}

console.log(listA.indexOf('Avocado'));

console.log(listB.indexOf('Durian'));

listB.push('Passion Fruit', 'Pomelo');

console.log(listA[3]);







