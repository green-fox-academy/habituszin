'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let coordinateX = [200, 350, 241];
let coordinatey = [45, 53, 230];

function drawLineToCenter(xArrey, yArrey){
  let x;
  let y;
  coordinateX.forEach(function (elem, index){
    x = elem;
    y = coordinatey[index]
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + 50);
    ctx.stroke();
  }) 
}

drawLineToCenter(coordinateX, coordinatey);