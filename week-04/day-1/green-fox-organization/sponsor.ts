'use strict';

import { Person } from "./person";

export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this._company = company ?? 'Google';
    this._hiredStudents = 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }

  public hire(): void {
    this._hiredStudents++;
  }

  public getGoal(): void {
    console.log('Hire brilliant junior software developers.');
  }
}