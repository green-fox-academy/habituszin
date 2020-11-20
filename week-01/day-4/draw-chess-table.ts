'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lines: number = 8;
let pixel: number = 1;
for (let i = 0; i < lines; i++) {
    let line: string ='';
    pixel ++;
    if (pixel % 2 == 0) {
        for (let j = 0; j < lines / 2; j++) {
            line += '%';
            line += ' ';
        }
        console.log(line);
        
    }else {
        for (let j = 0; j < lines / 2; j++) {
            line += ' ';
            line += '%';
        }
        console.log(line);
    }
    
}