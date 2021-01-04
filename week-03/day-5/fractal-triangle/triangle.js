'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawTriangle(long, beginingX, beginingY) {
  let height = long * Math.cos(Math.PI / 6);
  ctx.beginPath();
  ctx.moveTo(beginingX - long / 2, beginingY + height /2);
  ctx.lineTo(beginingX + long / 2, beginingY + height /2);
  ctx.lineTo(beginingX , beginingY - height /2);
  ctx.lineTo(beginingX - long / 2, beginingY + height /2);
  ctx.stroke();
}


function drawFraclatTriangle(side, startX, startY) {
  setTimeout(function() {
    
    if (side < 1){
      return
    }
    let height = side * Math.cos(Math.PI / 6);
    drawTriangle(side, startX, startY);
    drawFraclatTriangle(side / 2, startX - side / 2, startY - height / 4);
    drawFraclatTriangle(side / 2, startX + side / 2, startY - height / 4);
    drawFraclatTriangle(side / 2, startX, startY + height * (3/4));
  }, 1000);
  
}

drawFraclatTriangle(150,300,200);