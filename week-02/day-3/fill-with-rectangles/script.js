'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let rectangles = {
  fist: {
    x: 100,
    y: 100,
    horizontal: 30,
    vertical: 40,
    color: 'green',
  },
  second: {
    x: 200,
    y: 200,
    horizontal: 20,
    vertical: 90,
    color: 'red',
  },
  third: {
    x: 300,
    y: 0,
    horizontal: 120,
    vertical: 34,
    color: 'blue',
  },
  fourth: {
    x: 0,
    y: 0,
    horizontal: 34,
    vertical: 34,
    color: 'pink',
  },
}

function drawRectangle(inputData) {
  for (const key in inputData) {
    ctx.fillStyle = inputData[key].color;
    ctx.fillRect(inputData[key].x, inputData[key].y, inputData[key].x + inputData[key].horizontal, inputData[key].y + inputData[key].vertical);
  }
}

drawRectangle(rectangles);