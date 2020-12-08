'use strict';

import { Animal } from "./animal";

export class Bird extends Animal {

  constructor(name: string) {
    super()
    this._name = name;
  }
  public breed(): string {
    return 'laying eggs'
  }
}