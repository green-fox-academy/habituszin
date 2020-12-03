'use strict';

import { Ship } from "./ship";

export class BattleApp {
  private _shipOne: Ship;
  private _shipTwo: Ship;

  constructor(shipOne: Ship, shipTwo: Ship){
    this._shipOne = shipOne;
    this._shipTwo = shipTwo;
  }

  public battleForTwoShip(){
    this._shipOne.battle(this._shipTwo);
  }

}