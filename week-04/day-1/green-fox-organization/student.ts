'use strict';

import { Person } from "./person";

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization?: string){
    super(name, age, gender);
    this._skippedDays = 0;
    this._previousOrganization = previousOrganization ?? 'The School of Life';
  }

  public getGoal(): void {
    console.log('Be a junior software developer.');  
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} year old gender from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);   
  }

  public skipDays(numberOfDays): void {
    this._skippedDays += numberOfDays;
  }
  
}