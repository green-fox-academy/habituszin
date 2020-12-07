'use strict';

import { Plant } from "./plant";

export class Tree extends Plant {
  constructor(name: string) {
    super(name);
    this._waterLevel = 0;
    this._waterUse = 0.4;
    this._type = 'Tree';
    this._waterNeed = 10;
  }
}