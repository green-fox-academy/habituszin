'use strict';

import { Plane } from "./plane";

export class F16 extends Plane {
  constructor(){
    super()
    this._baseDamage = 30;
    this._maxAmmo = 8;
    this._type = 'F-16';
    this._priority = false;
    this._allDamage = 0;
    this._ammoMagazine = 0;
  }
}