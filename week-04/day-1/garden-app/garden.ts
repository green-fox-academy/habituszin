'use strict';

import { Flower } from "./flower";
import { Plant } from "./plant";
import { Tree } from "./tree";

export class Garden {
  private _listOfPLants: Plant[];

  constructor() {
    this._listOfPLants = [];
  };

  public plantFlower(name: string): void {
    this._listOfPLants.push(new Flower(name));
  }

  public plantTree(name: string): void {
    this._listOfPLants.push(new Tree(name));
  }

  public wateredPlants(waterQuantity: number): void {
    let waterQuantityForOnePlant: number = waterQuantity / this._listOfPLants.length;
    console.log(`Watering with ${waterQuantity}`);
    for (let i: number = 0; i < this._listOfPLants.length; i++) {
      this._listOfPLants[i].waterLevel = waterQuantityForOnePlant;
      this._listOfPLants[i].waterNeed();
    }
  }

  public gardenStatus(): void {
    for (let i: number = 0; i < this._listOfPLants.length; i++) {
      this._listOfPLants[i].waterNeed();   
    }
  }

}
