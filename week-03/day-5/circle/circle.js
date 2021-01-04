'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawFraclatCircles(beginingX, beginingY, radius) {
  setTimeout(function() {
    
    let height = (radius / 2)  * Math.sin(Math.PI / 4);
    if (radius < 10) {
      return
    }
    drawCircle(beginingX, beginingY, radius);
    drawFraclatCircles(beginingX, beginingY - radius /2, radius / 2);
    drawFraclatCircles(beginingX + height, beginingY + height, radius / 2);
    drawFraclatCircles(beginingX - height, beginingY + height, radius / 2);
    
  }, 1000);
}

drawFraclatCircles(300,200,200);