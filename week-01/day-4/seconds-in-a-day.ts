'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let secondsInDay: number = 60 * 60 * 24;
let currentSecondsInDay: number = currentHours * 3600 + currentMinutes * 60 + currentSeconds;
let remainingSeconds: number = secondsInDay - currentSecondsInDay;

console.log('Remaining seconds: ' + remainingSeconds);
