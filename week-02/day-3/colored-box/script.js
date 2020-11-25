'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(300, 300);
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 200);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.strokeStyle = 'pink';
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(250, 250);
ctx.stroke();

ctx.strokeStyle = 'purple';
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(350, 250);
ctx.stroke();

ctx.strokeStyle = 'brown';
ctx.beginPath();
ctx.moveTo(300, 200);
ctx.lineTo(350, 150);
ctx.stroke();

ctx.strokeStyle = 'grey';
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(250, 150);
ctx.stroke();

ctx.strokeStyle = 'orange';
ctx.beginPath();
ctx.moveTo(250, 150);
ctx.lineTo(350, 150);
ctx.stroke();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(350, 150);
ctx.lineTo(350, 250);
ctx.stroke();

ctx.strokeStyle = 'lime';
ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(250, 250);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(250, 150);
ctx.stroke();