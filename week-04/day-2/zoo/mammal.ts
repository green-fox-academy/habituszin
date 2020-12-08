'use strict';

import { Animal } from "./animal";

export class Mammal extends Animal {

  constructor(name: string) {
    super()
    this._name = name;
  }
  public breed(): string {
    return 'pushing miniature versions out'
  }
}