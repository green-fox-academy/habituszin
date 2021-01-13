'use strict';

const mapWith = (array, callback) => {
  let output = [];

  array.forEach(element => {
    output.push(callback(element))
  });

  return output;
}

const addOne = (number) => {
  return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string
const removeSecondLetter = (word) => {
  let newWord = [];
  let letter = word.split('');
  for (let i = 0; i < letter.length; i++) {
    if (i % 2 == 0) {
      newWord.push(letter[i])
    }
  }
  return newWord.join('');
};

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']