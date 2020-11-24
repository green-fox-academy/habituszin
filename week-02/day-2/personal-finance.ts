'use strict';

let costs: number[] = [500, 1000, 1250, 175, 800, 120];

function sumOurSpend(list: number[]): number {
  let sumOfCosts: number = 0;
  for (let i: number = 0; i < costs.length; i++) {
    sumOfCosts += costs[i];
  }
  return sumOfCosts
};

console.log(sumOurSpend(costs));


function chooseTheGreatest(list: number[]): number {
  let maxCost: number = list[0];
  for (let i: number = 0; i < costs.length; i++) {
    if (maxCost < costs[i]) {
      maxCost = costs[i]
    }
  }
  return maxCost
}

console.log(chooseTheGreatest(costs));

function chooseTheCheepest(list: number[]): number {
  let minCost: number = list[0];
  for (let i: number = 0; i < costs.length; i++) {
    if (minCost > costs[i]) {
      minCost = costs[i]
    }
  }
  return minCost;
};

console.log(chooseTheCheepest(costs));

function calculateAvarageCost(list: number[]): number {
  let avarageCost:number = sumOurSpend(list) / costs.length;
  return avarageCost
}

console.log(calculateAvarageCost(costs));
