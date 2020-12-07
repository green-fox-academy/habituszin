'use strict';

import { Person } from "./person";

export class Mentor extends Person {
  private _level: string;

  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this._level = level ?? 'intermediate';
  }

  public getGoal(): void {
    console.log('Educate brilliant junior software developers.');
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor.`);
  }
}
