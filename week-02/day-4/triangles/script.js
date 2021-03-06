'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw a little triangle
function drawTriangle(long, beginingX, beginingY) {
  let height = long * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(beginingX, beginingY);
  ctx.lineTo(beginingX + long, beginingY);
  ctx.lineTo(beginingX + (long / 2), beginingY - height);
  ctx.lineTo(beginingX, beginingY);
  ctx.stroke();
}

// Draw the final triangle
function drawSuperTriangle(trianglesNumber, triangleSide) {
  let startingX = 0;
  let startingY = 400;
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
drawSuperTriangle(20, 20);
