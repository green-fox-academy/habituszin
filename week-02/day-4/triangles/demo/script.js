'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let startingX = 0;
let startingY = 400;

function drawTriangle(long, beginingX, beginingY) {
  let height = long * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(beginingX, beginingY);
  ctx.lineTo(beginingX + long, beginingY);
  ctx.lineTo(beginingX + (long / 2), beginingY - height);
  ctx.lineTo(beginingX, beginingY);
  ctx.stroke();
}


function drawSuperTriangle(trianglesNumber, triangleSide) {

  let inLineTriangleNumber = trianglesNumber;
  for (let j = 0; j < trianglesNumber; j ++) {
    for (let i = 0; i < inLineTriangleNumber; i++) {
      drawTriangle(triangleSide, (startingX/2 +  i * triangleSide), startingY)
    }
    startingX += triangleSide;
    startingY -= triangleSide * Math.cos(Math.PI / 6);
    inLineTriangleNumber--;
  }
}

drawSuperTriangle(10, 40);
