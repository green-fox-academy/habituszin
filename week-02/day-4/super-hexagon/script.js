'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Make hexagon
function drawHexagon(long, beginingX, beginingY) {
  let height = long * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(beginingX, beginingY);
  ctx.lineTo(beginingX + long, beginingY);
  ctx.lineTo(beginingX + long + (long / 2), beginingY - height);
  ctx.lineTo(beginingX + long, beginingY - (height * 2));
  ctx.lineTo(beginingX, beginingY - (height * 2));
  ctx.lineTo(beginingX - (long / 2), beginingY - height);
  ctx.lineTo(beginingX, beginingY);
  ctx.stroke();
}

// Drak super hexagon
function drawSuperHexagon(side, count) {
  let height = side * Math.cos(Math.PI / 6);
  let x = 50;
  let y = 300;
  let k = count;
  let l = k + 1;
  let asd;
  for (let i = 0; i < count; i++) {
    x += side * 1.5;
    y = 300 + i * height;
    if (k <= (count * 2 - 1)) {
      asd = y;
      for (let j = 0; j < k; j++) {
        drawHexagon(side, x, y);
        y -= height * 2;
      }
      k++;
    }
  }
  asd -= height;
  for (let i = 0; i < count - 1; i++) {
    x += side * 1.5;
    y = asd - i * height;
    for (let j = 0; j <= l; j++) {
      drawHexagon(side, x, y);
      y -= height * 2;
    }
    l--;

  }

}


drawSuperHexagon(20, 4);