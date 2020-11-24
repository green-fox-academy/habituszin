'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let fistPart: string = quote.split('you expect',1)[0];
let secondPart: string = quote.split('Law: It', 2)[1];
quote = fistPart + 'always takes longer than' + secondPart;

console.log(quote);