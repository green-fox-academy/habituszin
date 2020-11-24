'use strict';

let productDatabase: object = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Aplles: 150,
  Bread: 50,
  Chicken: 550
};

function showProductPrice(name: string): number {
  return productDatabase[name]
}
console.log('The price of the fish is ' + showProductPrice('Fish'));

function showTheMostExpensive(database: object): string {
  let highestPrice: number = 0;
  for (let i: number = 0; i < Object.keys(database).length; i++) {
    if (highestPrice < Object.values(database)[i]) {
      highestPrice = Object.values(database)[i]
    }
  }
  for (let i: number = 0; i < Object.keys(database).length; i++) {
    if (Object.values(database)[i] === highestPrice) {
      return Object.keys(database)[i];

    }
  }
};
console.log('The most expensive in the list is ' + showTheMostExpensive(productDatabase));

function averagePrice(database: object): number {
  let sumPrice: number = 0;
  for (let i: number = 0; i < Object.keys(database).length; i++) {
    sumPrice += Object.values(database)[i];
  }
  let average = sumPrice / Object.keys(database).length;
  return average
};

console.log('The average price is ' + averagePrice(productDatabase));

function showHowMany(value: number): number {
  let productICanBuy: string[] = [];
  for (let i: number = 0; i < Object.keys(productDatabase).length; i++) {
    if (value > Object.values(productDatabase)[i]) {
      productICanBuy.push(Object.keys(productDatabase)[i]);
    }
  }
  return productICanBuy.length;
};

console.log(showHowMany(300) + ' product is under this volume.');

function exatlyPrice(cost: number): void {
  let answer: boolean = false;
  for (let i: number = 0; i < Object.keys(productDatabase).length; i++) {
    if (cost == Object.values(productDatabase)[i]) {
      answer = true;
    }
  }
  if (answer == true) {
    console.log('Yes');
  } else {
    console.log('Sorry bro.');
  }
};

exatlyPrice(125);

function showTheLowest(database: object): string {
  let lowestPrice: number = Object.values(database)[0];
  for (let i: number = 0; i < Object.keys(database).length; i++) {
    if (lowestPrice > Object.values(database)[i]) {
      lowestPrice = Object.values(database)[i]
    }
  }
  for (let i: number = 0; i < Object.keys(database).length; i++) {
    if (Object.values(database)[i] === lowestPrice) {
      return Object.keys(database)[i];

    }
  }
};

console.log('The cheapest thing is ' + showTheLowest(productDatabase));
