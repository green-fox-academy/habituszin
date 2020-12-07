'use strict';

import { Plane } from "./plane";

export class Carrier {
  protected _aircraftList: Plane[];
  protected _ammoStorage: number;
  protected _carrierHp: number;
  protected _totalDamage: number;

  constructor(ammoStorage: number, carrierHp: number) {
    this._ammoStorage = ammoStorage;
    this._carrierHp = carrierHp;
    this._aircraftList = [];
    this._totalDamage = 0;
  }

  public addAircraft(plane: Plane): void {
    this._aircraftList.push(plane)
  }

  public carrierHpDecrase(damage: number): void {
    this._carrierHp -= damage;
  }

  public fightOtherCarrier(otherCarrier: Carrier): void {
    let totalDamage: number = 0;
    for (let i: number = 0; i < this._aircraftList.length; i++) {
      totalDamage += this._aircraftList[i].fight();
    }
    otherCarrier.carrierHpDecrase(totalDamage);
    this._totalDamage = totalDamage;
    if (otherCarrier._carrierHp <= 0) {
      console.log('*** Won the fight! ***');     
    } else {
      console.log('*** They still live! ***');
      
    }
  } 

  public fill(): void {
    for (let i: number = 0; i < this._aircraftList.length; i++) {
      if (this._aircraftList[i].isProtected && this._ammoStorage > 0) {
        this._ammoStorage -= this._aircraftList[i].refill(this._ammoStorage);
      } else if (!this._aircraftList[i].isProtected && this._ammoStorage > 0)
        this._ammoStorage -= this._aircraftList[i].refill(this._ammoStorage);
    }
    if (this._ammoStorage == 0) {
      console.log('No more ammo!');

    }
  }

  public getStatus(): void {
    console.log(`HP: ${this._carrierHp}, Aircraft count: ${this._aircraftList.length}, Ammo storage: ${this._ammoStorage}, Total damage: ${this._totalDamage}`);
    console.log('Aircrafts:');
    for (let i: number = 0; i < this._aircraftList.length; i++) {
      this._aircraftList[i].getStatus();
    }
    if (this._carrierHp == 0) {
      console.log(`It's dead Jim :(`);
    }
  }
}


