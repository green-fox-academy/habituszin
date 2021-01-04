'use strict';

import { log } from "console";

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
let originalFile: string = 'reversed-order.txt';

function reverseOrder(source: string): void {
  let fileContent: string[] = fs.readFileSync(source).toString().split('\n').reverse();
  
  fs.writeFileSync(source, fileContent.join(''))
  

}

reverseOrder(originalFile);