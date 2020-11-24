'use strict';

let productDatabase: object = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Aplles: 150,
  Bread: 50,
  Chicken: 550
};

function showUnderPrice(value: number): string[] {
  let productICanBuy: string[] = [];
  for (let i: number = 0; i < Object.keys(productDatabase).length; i++) {
    if (value > Object.values(productDatabase)[i]) {
      productICanBuy.push(Object.keys(productDatabase)[i]);
    }
  }
  return productICanBuy;
};

console.log(showUnderPrice(201));

function showUpperPrice(value: number): object {
  let productICanBuy: object = {};
  for (let i: number = 0; i < Object.keys(productDatabase).length; i++) {
    if (value < Object.values(productDatabase)[i]) {
      productICanBuy[Object.keys(productDatabase)[i]] = Object.values(productDatabase)[i];
    }
  }
  return productICanBuy;
};

console.log(showUpperPrice(150));
