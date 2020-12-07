'use strict';

import { Plane } from "./plane";

export class F35 extends Plane {
  constructor() {
    super()
    this._baseDamage = 50;
    this._maxAmmo = 12;
    this._type = 'F-35';
    this._priority = true;
    this._allDamage = 0;
    this._ammoMagazine = 0;
  }
}