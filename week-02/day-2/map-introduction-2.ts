'use strict';

let map: object = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moond Bear',
  '978-1-60309-461-0': 'The Lab'
};

for (let i: number = 0; i < Object.keys(map).length; i++) {
  console.log(Object.values(map)[i] + ' (' + Object.keys(map)[i] + ')');
}

delete map['978-1-60309-444-3'];

for (let i: number = 0; i < Object.keys(map).length; i++) {
  if (Object.values(map)[i] == 'The Lab') {
    delete map[Object.keys(map)[i]]
  }
}

for (let i: number = 0; i < Object.keys(map).length; i++) {
  console.log(Object.values(map)[i] + ' (' + Object.keys(map)[i] + ')');
}

map['978-1-60309-450-4'] = 'They Called Us Enemy';
map['978-1-60309-453-5'] = 'Why Did We Trust Him?';

if (map['478-0-61159-424-8'] == undefined) {
  console.log('There is no value.');
} else {
  console.log('There is the value: ' + Object.values(map)['478-0-61159-424-8']);
}

console.log(map['978-1-60309-453-5']);
