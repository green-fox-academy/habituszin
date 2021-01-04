'use strict';

export class Sharpie{
  private _color: string;
  private _width: number;
  private _inkAmount: number;

  constructor(color: string, width: number){
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }

  public use(cost: number): void{
    if (cost == undefined){
      return
    }
    this._inkAmount -= cost;
  }

  public get inklevel(): number{

    return this._inkAmount
  }

  public get color(): string{
    return this._color
  }
 
}