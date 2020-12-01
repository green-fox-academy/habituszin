'use strict';

import { log } from "console";

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');
let originalFile: string = 'duplicated-chars.txt';

function removeDuplaca(source: string): void {
  let fileContent: string[] = fs.readFileSync(source).toString().split('');
  for (let i: number = 0; i < fileContent.length; i++) {
    if (fileContent[i] == fileContent[i + 1]) {
      fileContent.splice(i, 1)
    }
    
  }
  fs.writeFileSync(source, fileContent.join(''))
  console.log(fileContent);

}
removeDuplaca(originalFile);