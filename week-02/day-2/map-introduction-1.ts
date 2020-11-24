'use strict';

let map: object = {};

if (Object.keys(map).length == 0) {
  console.log('This object is empty.');
} else {
  console.log('This object is not empty.');
}

map = {
  97: 'a',
  98: 'b',
  99: 'c',
  65: 'A',
  66: 'B',
  67: 'C'
}

console.log(Object.keys(map));

console.log(Object.values(map));

map[68] = 'D';

console.log(Object.keys(map).length);

console.log(map[99]);

delete map[97];

console.log(map);

if (map[100] == undefined) {
  console.log('There is no value');
} else {
  console.log(map[100]);
}

map = {};
