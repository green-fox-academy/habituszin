'use strict';

import { StringedInstrument } from "./stringed-instrument";

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this._soundOfInstrument = 'Twang';
    this._numberOfStrings = numberOfStrings ?? 6;
    this._name = 'Electric Guitar';
  }

  public sound(): string{
    return this._soundOfInstrument;
  }

  public play(): void{
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);   
  }
}