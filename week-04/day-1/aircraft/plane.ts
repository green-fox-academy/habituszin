'use strict';

export class Plane {
  protected _type: string;
  protected _maxAmmo: number;
  protected _baseDamage: number;
  protected _ammoMagazine: number;
  protected _allDamage: number;
  protected _priority: boolean;

  public refill(ammoCount: number): number {
    let reloadedAmmoNumber: number = 0;
    if (this._ammoMagazine <= this._maxAmmo) {
      reloadedAmmoNumber = this._maxAmmo - this._ammoMagazine;
      this._ammoMagazine += reloadedAmmoNumber;
      return reloadedAmmoNumber;
    } else {
      return reloadedAmmoNumber;
    }
  }

  public fight(): number {
    let damage: number = this._ammoMagazine * this._baseDamage;
    this._allDamage += damage;
    this._ammoMagazine = 0;
    return damage;
  }

  public get type(): string {
    return this._type;
  }

  public getStatus(){
    console.log(`Type ${this.type}, Ammo: ${this._ammoMagazine}, Base Damage: ${this._baseDamage}, All Damage: ${this._allDamage}`);   
  }

  public get isProtected(): boolean{
    return this._priority;
  }
}