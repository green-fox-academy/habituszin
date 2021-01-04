'use strict';

import { Car } from "./car";

export class Station {
  private _gasAmount: number;

  constructor(){
    this._gasAmount = 1000;
  }

  public refill(car: Car): void{
    this._gasAmount -= car.refilCar()
  }
}