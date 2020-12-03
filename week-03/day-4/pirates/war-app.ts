'use strict';

import { Armada } from "./armada";


class WarApp {
  private _attackerArmada: Armada;
  private _defenderArmada: Armada;

  constructor(attackerArmada: Armada, defenderArmada: Armada) {
    this._attackerArmada = attackerArmada;
    this._defenderArmada = defenderArmada;
  }

  public armadaWar(): void {
    this._attackerArmada.fillArmada();
    this._defenderArmada.fillArmada();
    
    
    for (let i: number = 0; i < this._attackerArmada.shipList; i++) {
      for (let j: number = 0; j < this._defenderArmada.shipList; j++) {
        while (this._attackerArmada.shipsOfArmada[i].usable == true && this._defenderArmada.shipList > 0 && this._defenderArmada.shipsOfArmada[j].usable) {
          
          if (this._attackerArmada.shipsOfArmada[i].battle(this._defenderArmada.shipsOfArmada[j])) {
            this._defenderArmada.shipsOfArmada[j].sink();
          } else {
            this._attackerArmada.shipsOfArmada[i].sink();
          }
        }       
        
      }
    }
    
    if (this._attackerArmada.usableArmada()) {
      console.log('The winner is the First Armada');
      
    } else {
      console.log('The winner is the Second Armada');
    }
  }

}

let firstArmada = new Armada;
let secondArmada = new Armada;

let war = new WarApp(firstArmada, secondArmada);


war.armadaWar();