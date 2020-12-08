'use strict';

export abstract class Animal{
  protected _name: string;
  protected _age: number;
  protected _isMale: boolean;
  protected _hungry: number;


  constructor() {
    
  }

  public getName(): string{
    return this._name;
  }

  abstract breed(): void;

  public eat(count: number): void {
    this._hungry += count;
  }
}