'use strict';

export class Plant {
  protected _name: string;
  protected _type: string;
  protected _waterLevel: number;
  protected _waterUse: number;
  protected _waterNeed: number;

  constructor(name: string) {
    this._name = name;
  }

  public get waterUse(): number {
    return this._waterUse
  }

  public get waterLevel(): number {
    return this._waterLevel
  }

  public set waterLevel(quantity: number) {
    this._waterLevel += quantity;
  }

  public waterNeed(): void{
    if (this._waterLevel < this._waterNeed) {
      console.log(`The ${this._name} ${this._type} needs water`);     
    } else {
      console.log(`The ${this._name} ${this._type} doesnt need water`); 
    }
  }
}