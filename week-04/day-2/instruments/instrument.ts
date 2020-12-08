'use strict';

export abstract class Instrument {
  protected _name: string;
  protected _soundOfInstrument: string;
  
  constructor(){
  }

  abstract  play(): void;

}