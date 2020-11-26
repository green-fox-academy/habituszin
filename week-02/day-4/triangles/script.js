'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let superTriangle = [10, 36];

function drawTriangle(long, beginingX, beginingY) {
  let height = long * Math.cos(Math.PI / 6);
  console.log(height);
  ctx.beginPath();
  ctx.moveTo(beginingX, beginingY);
  ctx.lineTo(beginingX + long, beginingY);
  ctx.lineTo(beginingX + (long / 2), beginingY - height);
  ctx.lineTo(beginingX, beginingY);
  ctx.stroke();
}


function drawSuperTriangle(count, side) {
  let x = 0;
  let y = 400;
  let k = count;
  for (let j = 0; j < count; j ++) {
    for (let i = 0; i < k; i++) {
      drawTriangle(side, (x/2 +  i * side), y)
    }
    x += side;
    y -= side * Math.cos(Math.PI / 6);
    k--;
  }
}
drawSuperTriangle(10, 40)