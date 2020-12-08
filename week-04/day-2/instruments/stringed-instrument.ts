'use strict';

import { Instrument } from "./instrument";

export abstract class StringedInstrument extends Instrument {
  protected _numberOfStrings: number;


  constructor() {
    super();
  }

  abstract sound(): string;

  abstract play(): void;
}