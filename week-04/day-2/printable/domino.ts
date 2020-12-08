'use strict';

import { Printable } from "./printable";

export class Domino implements Printable{
  protected _rightSide: number;
  protected _leftSide: number;

  constructor(){

  }

  public printAllFields(): void {
    console.log(`Domino A side: ${this._rightSide}, B side: ${this._leftSide}`);
  }
}