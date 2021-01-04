'use strict';

export class Car {
  private _gasAmount: number;
  private _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  }

  public refilCar(): number{
    let missingGas:number = this._capacity - this._gasAmount
    this._gasAmount += missingGas;
    return missingGas;
  }
}