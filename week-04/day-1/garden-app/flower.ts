'use strict';

import { Plant } from "./plant";

export class Flower extends Plant {
  constructor(name: string) {
    super(name)
    this._waterLevel = 0;
    this._waterUse = 0.75;
    this._type = 'Flower';
    this._waterNeed = 5;
  }

}