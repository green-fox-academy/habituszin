'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let boxData = [[10, 10], [290, 10], [290, 290], [10, 290]];
let smthngData = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectDots(data) {
  let x = data[data.length - 1][0];
  let y = data[data.length - 1][1];
  data.forEach(function (elem, i) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(elem[0], elem[1]);
    ctx.stroke();
    x = elem[0];
    y = elem[1];
  })
}

connectDots(boxData);
connectDots(smthngData);