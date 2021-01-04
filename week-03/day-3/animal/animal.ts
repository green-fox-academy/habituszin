'use strict';

export class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  };

  public get hunger(): number {
    return this._hunger;
  }

  public get thirst(): number {
    return this._thirst;
  }

  public eat(): void {
    this._hunger--;
  };

  public drink(): void {
    this._thirst--;
  }

  public play(): void {
    this._hunger++;
    this._thirst++;
  }

  public animalStatus(): void {
    console.log(this._thirst);
    console.log(this._hunger);
  }
}