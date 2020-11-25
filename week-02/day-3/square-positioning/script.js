'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let squares = {
  fist: {
    x: 100,
    y: 100,
    side: 50,
  },
  second: {
    x: 200,
    y: 200,
    side: 50,
  },
  third: {
    x: 150,
    y: 30,
    side: 50,
  },

}

function drawSquare(inputData) {
  for (const key in inputData) {
    ctx.fillRect(inputData[key].x, inputData[key].y, inputData[key].side, inputData[key].side);
  }
  ;
}

drawSquare(squares);