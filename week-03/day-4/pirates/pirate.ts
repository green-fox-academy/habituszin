'use strict';

export class Pirate {
  private _status: string;
  private _rumLevel: number;
  private _life: boolean;
  private _sleep: boolean;

  constructor() {
    this._status = 'pirate';
    this._life = true;
    this._sleep = false;
    this._rumLevel = 0;
  }

  public beCaptain(): void {
    this._status = 'Captain'
  }

  public drinkSomeRum(): void {
    if (this._life = true) {
      if (this._rumLevel > 5) {
        this._sleep = true;
      } else {
        this._rumLevel++;
      }
    } else {
      console.log('The pirate is dead');
    }

  }

  public howsItGoingMate(): void {
    if (this._life = true) {
      if (this._rumLevel < 5) {
        console.log('Pour me anudder!');
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
        this._sleep = true;
      }
    } else {
      console.log('The pirate is dead');
    }
  }

  public die(): void {
    this._life = false;
  }

  public brawl(otherPirate: Pirate): void {
    let possibleEnding: number = Math.random() * 3;
    if (possibleEnding < 1) {
      otherPirate._life = false;
    } else if (possibleEnding < 2 && possibleEnding > 1) {
      this._life = false;
    } else if (possibleEnding > 3) {
      otherPirate._sleep = true;
      this._sleep = true;
    }
  }

  public get rumLevel(): number {
    return this._rumLevel;
  }

  public get life(): boolean {
    return this._life;
  }

  public get sleep(): boolean {
    return this._sleep;
  }
}

