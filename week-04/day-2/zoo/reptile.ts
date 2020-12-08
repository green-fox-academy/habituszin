'use strict';

import { Animal } from "./animal";

export class Reptile extends Animal {

  constructor(name: string) {
    super()
    this._name = name;
  }
  public breed(): string {
    return 'laying eggs'
  }
}