'use strict';

import { flyable } from "../flyable/flyable";
import { Animal } from "./animal";

export class Bird extends Animal implements flyable {

  constructor(name: string) {
    super()
    this._name = name;
  }
  public breed(): string {
    return 'laying eggs'
  }

  public land(): void { };

  public fly(): void { };

  public takeOff(): void { };

}