'use strict';

import { flyable } from "./flyable";
import { Vehicle } from "./vehicle";

export class Helicopter extends Vehicle implements flyable {
  constructor() {
    super()
  }

  public land(): void { };

  public fly(): void { };

  public takeOff(): void { };

}