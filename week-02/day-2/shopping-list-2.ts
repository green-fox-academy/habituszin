'use strict';

let priceOfProduct: object = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
};

let shoppingListBob: object = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1
};

let shoppingListAlice: object = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};

function howMuchPaid(shoppingList: object): number {
  let totalSpend: number = 0;
  for (let i: number = 0; i < Object.keys(shoppingList).length; i++) {
    for (let j: number = 0; j < Object.keys(priceOfProduct).length; j++) {
      if (Object.keys(shoppingList)[i] == Object.keys(priceOfProduct)[j]) {
        totalSpend += Object.values(shoppingList)[i] * Object.values(priceOfProduct)[j]
      }
    }
  }
  return totalSpend;
};

console.log(howMuchPaid(shoppingListBob) + ' Bob paid');
console.log(howMuchPaid(shoppingListAlice) + ' Alice paid');

function whoBuyMore(choosen: string): void {
  let choosenBob: number = 0;
  let choosenAlice: number = 0;
  for (let i: number = 0; i < Object.keys(shoppingListBob).length; i++) {
    if (Object.keys(shoppingListBob)[i] == choosen) {
      choosenBob = Object.values(shoppingListBob)[i];
    }
  }
  for (let i: number = 0; i < Object.keys(shoppingListBob).length; i++) {
    if (Object.keys(shoppingListAlice)[i] == choosen) {
      choosenAlice = Object.values(shoppingListAlice)[i];
    }
  }
  if (choosenBob > choosenAlice) {
    console.log('Bob buy more ' + choosen);
  } else {
    console.log('Alice buy more ' + choosen);
  }
};

whoBuyMore('Rice');

whoBuyMore('Potato');

function whoBuyMoreDifferentProduct(listA: object, listB: object): void {
  if (Object.keys(listA).length > Object.keys(listB).length) {
    console.log('Bob buys more different product.');
  } else {
    console.log('Alice buys more different product.');
  }
};

whoBuyMoreDifferentProduct(shoppingListBob, shoppingListAlice);

function whoBuyMoreProduct(listA: object, listB: object): void {
  let pieceA: number = 0;
  let pieceB: number = 0;
  for (let i: number = 0; i < Object.keys(listA).length; i++) {
    pieceA += Object.values(listA)[i]
  }
  for (let i: number = 0; i < Object.keys(listB).length; i++) {
    pieceB += Object.values(listB)[i]
  }
  if (pieceA > pieceB) {
    console.log('Bob buys more product.');
  } else {
    console.log('Alice buys more product.');
  }
};

whoBuyMoreProduct(shoppingListBob,shoppingListAlice);