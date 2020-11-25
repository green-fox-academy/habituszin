'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let squares = [20, 50, 80,]

function drawSquareMiddle(inputData){
  inputData.forEach(function (elem){
    ctx.strokeRect(300 - (elem /2), 200 - (elem / 2), elem, elem)
  })   
}

drawSquareMiddle(squares);