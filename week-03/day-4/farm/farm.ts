'use strict';

import { Animal } from "../../day-3/animal/animal";

class Farm {
  private _listOfAnimals: Animal[];
  private _slots: number;

  constructor(slots: number) {
    this._listOfAnimals = [];
    this._slots = slots;
  }

  public get listOfAnimals(): Animal[] {
    return this._listOfAnimals
  }

  public breed(): void {
    if (this._slots > this._listOfAnimals.length) {
      this._listOfAnimals.push(new Animal);
      this._slots--;
    }
  }

  public slaughter() {
    let theHungestAnimal: Animal = this._listOfAnimals[0];
    for (let i: number = 0; i < this._listOfAnimals.length; i++) {
      if (theHungestAnimal.hunger < this._listOfAnimals[i].hunger) {
        theHungestAnimal = this._listOfAnimals[i];
      }

    }
    this._listOfAnimals.splice(this._listOfAnimals.indexOf(theHungestAnimal), 1)
  }
}

let myLittleFarm = new Farm(10);

myLittleFarm.breed();
myLittleFarm.breed();
myLittleFarm.breed();
myLittleFarm.breed();
console.log(myLittleFarm);

myLittleFarm.listOfAnimals[0].play();
console.log(myLittleFarm.listOfAnimals[0]);
myLittleFarm.slaughter();
console.log(myLittleFarm);