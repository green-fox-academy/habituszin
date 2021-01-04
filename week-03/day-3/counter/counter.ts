'use strict';

export class Counter {
  private _value: number;
  private _startingValue: number;
  
  constructor(value?: number) {
    if (value) {
      this._startingValue = value;
      this._value = value;
    } else {
      this._startingValue = 0
      this._value = 0;
    }
  }
  
  public add(number?: number): void {
    if (number) {
      this._value += number;
    } else {
      this._value++;
    }
    
  }
  public get(): number {
    return this._value;
  }
  
  public reset(): void {
    this._value = this._startingValue;
  }
};

