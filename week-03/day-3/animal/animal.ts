'use strict';

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  };

  public eat(): void {
    this._hunger--;
  };

  public drink(): void {
    this._thirst--;
  }

  public play(): void {
    this._hunger++;
    this._thirst++;
  }

  public animalStatus(): void {
    console.log(this._thirst);
    console.log(this._hunger);
  }
}

let dog = new Animal;
for (let i: number = 0; i < 7; i++) {
  dog.drink();
  dog.eat();
}

for (let i: number = 0; i < 3; i++) {
  dog.play();
}

dog.animalStatus();