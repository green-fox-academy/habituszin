'use strict';

import { Pirate } from "./pirate";

export class Ship {
  private _crew: Pirate[];
  private _shipSize: number;
  private _usable: boolean;

  constructor() {
    this._shipSize = 50;
    this._crew = [];
    this._usable = true
  }

  public fillShip(): void {
    if (this._crew.length == 0) {
      let numberOfCrew: number = Math.random() * this._shipSize;
      for (let i: number = 0; i < numberOfCrew; i++) {
        this._crew.push(new Pirate);
      }
      this._crew[0].beCaptain();
    }
  }

  public captainStatus(): void {
    console.log(`Rumlevel: ${this._crew[0].rumLevel} Sleep: ${this._crew[0].sleep} Live: ${this._crew[0].life}`);
  }

  public crewStatus(): number {
    let numberAlivePirate: number = 0;
    for (let i: number = 0; i < this._crew.length; i++) {
      if (this._crew[i].life == true) {
        numberAlivePirate++;
      }
    }
    return numberAlivePirate;

  }

  public calculateShipPoint(ship: Ship): number {
    let shipPoint: number;
    for (let i: number = 0; i < ship._crew.length; i++) {
      if (ship._crew[i].life == true) {
        shipPoint++;
      }
    }
    shipPoint -= this._crew[0].rumLevel;
    return shipPoint;
  }

  public everyoneDrink(): void {
    for (let i: number = 0; i < this._crew.length; i++) {
      for (let j: number = 0; j < Math.random() * 5; j++) {
        this._crew[i].drinkSomeRum
      }
    }
  }

  public killSomePirate(): void {
    for (let i: number = 0; i < this._crew.length; i++) {
      let chanceToLive: number = Math.random() * 2;
      if (chanceToLive > 1) {
        this._crew[i].die();
      }

    }
  }

  public battle(otherShip: Ship): boolean {
    let win: boolean;
    let attackerPoint: number = 0;
    attackerPoint = this.crewStatus() - this._crew[0].rumLevel;
    let defenderPoint: number = 0;
    defenderPoint = otherShip.crewStatus() - otherShip._crew[0].rumLevel;
    if (attackerPoint > defenderPoint) {
      this.everyoneDrink();
      otherShip._usable = false;
      win = true;

    } else {
      this.killSomePirate();
      this._usable = false;
      otherShip.everyoneDrink;
      win = false;
    }
    return win;
  }

  public get usable(): boolean {
    return this._usable;
  }

  public sink(): void{
    this._usable = false;
  }
  
}
