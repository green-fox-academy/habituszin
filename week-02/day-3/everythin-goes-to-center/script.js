'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let coordinateX = 200;
let coordinatey = 45;

function drawLineToCenter(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(300, 200);
  ctx.stroke();
}


function drawSpiderWeb() {
  for (let i = 0; i <= 600; i += 20) {
    for (let j = 0; j <= 400; j += 20) {
      if (i == 0 || i == 600) {
        drawLineToCenter(i, j)
      } else if (j == 0 || j == 400) {
        drawLineToCenter(i, j)
      }
    }
  }
}

drawSpiderWeb()