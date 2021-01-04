'use strict';

import { Sharpie } from "../../day-3/sharpie/sharpie";

class SharpieSet {
  private _sharpieList: Sharpie[];

  constructor(){
    this._sharpieList = [];
  }

  public addToList(newSharpie: Sharpie) {
    this._sharpieList.push(newSharpie);
  }

  public countUsable() {
    for (let i = 0; i < this._sharpieList.length; i++) {
      if (this._sharpieList[i].inklevel > 0) {
        console.log(`${this._sharpieList[i].color} is usable`);
      }
    }
  }

  public removeTrash() {
    for (let i = 0; i < this._sharpieList.length; i++) {
      if (this._sharpieList[i].inklevel == 0) {
        this._sharpieList.splice(this._sharpieList.indexOf(this._sharpieList[i]), 1)
      }

    }
  }
}

let listOfSharpie = new SharpieSet;
let blueSharpie = new Sharpie('blue', 10);



listOfSharpie.addToList(blueSharpie);


listOfSharpie.countUsable();