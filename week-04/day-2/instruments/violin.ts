'use strict';

import { StringedInstrument } from "./stringed-instrument";

export class Violin extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this._soundOfInstrument = 'Screech';
    this._numberOfStrings = numberOfStrings ?? 4;
    this._name = 'Violin';
  }

  public sound(): string{
    return this._soundOfInstrument;
  }

  public play(): void{
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);   
  }
}