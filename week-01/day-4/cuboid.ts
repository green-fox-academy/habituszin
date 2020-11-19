'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
let cubeWidth: number = 10;
let cubeHeight: number = 20;
let cubeLength: number = 30;

let surface:number = (cubeHeight * cubeWidth * 2) + (cubeHeight * cubeLength * 2) + (cubeLength * cubeWidth * 2);
let volume: number = cubeHeight * cubeLength * cubeWidth;

console.log('Surface: ' + surface);
console.log('Volume: ' + volume);
