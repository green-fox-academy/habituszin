'use strict';

import { log } from "console";

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
let originalFile: string = 'reversed-lines.txt';

function reverseLinesInText(source: string): void {
  let fileContent: string[] = fs.readFileSync(source).toString().split('\n');
  
  let newFile: string[] = [];
  for (let i: number = 0; i < fileContent.length; i++) {
    newFile.push(fileContent[i].split('').reverse().join(''));

  }
  fs.writeFileSync(source, newFile.join(''))

}

reverseLinesInText(originalFile);