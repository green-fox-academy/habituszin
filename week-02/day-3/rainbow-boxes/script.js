'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let data = {
  red: 350,
  orange: 300,
  yellow: 250,
  green: 200,
  blue: 150,
  indigo: 100,
  violet: 50
}

function drawRainbow(inputData) {
  for (const key in inputData) {
    ctx.fillStyle = key;
    ctx.fillRect(300 - (inputData[key] / 2), 200 - (inputData[key] / 2), inputData[key], inputData[key]);
  }
}

drawRainbow(data);