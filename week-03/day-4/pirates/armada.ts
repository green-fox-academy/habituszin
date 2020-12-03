'use strict';

import { Ship } from "./ship";

export class Armada {
  private _shipList: Ship[];

  constructor() {
    this._shipList = [];
  }

  public fillArmada(): void {
    for (let i: number = 0; i < 50; i++) {
      let ship = new Ship;
      ship.fillShip();
      this._shipList.push(ship);
    }
  }

  public get shipList(): number {
    return this._shipList.length;
  }

  public removeShipFromArmada(i: number): void {
    this._shipList.splice(i, 1);
  }

  public get shipsOfArmada(): Ship[]{
    return this._shipList;
  }

  public usableArmada(): boolean{
    let armadaChecker: boolean = false;
    for (let i: number = 0; i < this._shipList.length; i++) {
      if (this.shipsOfArmada[i].usable) {
        armadaChecker = true;
      }   
    }
    return armadaChecker;
  }
}