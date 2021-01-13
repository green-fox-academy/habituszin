'use strict';

let sectionElement = document.getElementsByTagName('section')[0];

const generateDiv = (number) => {
  let div = document.createElement('div');
  div.innerHTML = number;
  return div
}

for (let i = 1; i <= 100; i++) {
  sectionElement.appendChild(generateDiv(i));
}

const isItPrime = (n) => {
  let dividers = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      dividers.push(i);
    }
  }
  if (dividers.length == 2) {
    return 'prime'
  } else {
    return 'not-prime'
  }
}
let index = 0;

let myTimer = setInterval(() => {
  sectionElement.children[index].setAttribute('class', isItPrime(Number(sectionElement.children[index].innerHTML)))
  index++;
  if (index >= sectionElement.children[index].length) {
    clearInterval(myTimer);
  }
}, 100);


