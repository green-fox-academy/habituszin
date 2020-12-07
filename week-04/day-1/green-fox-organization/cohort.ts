'use strict';

import { Mentor } from "./mentor";
import { Student } from "./student";

export class Cohort {
  protected _name: string;
  protected _students: Student[];
  protected _mentors: Mentor[];

  constructor(name: string){
    this._name = name;
    this._mentors = [];
    this._students = [];
  }

  public addStudent(Student): void {
    this._students.push(Student);
  }

  public addMentor(Mentor): void {
    this._mentors.push(Mentor);
  }

  public info(): void {
    console.log(`The ${this._name} cohort has ${this._students.length} of students students and ${this._mentors.length} of mentors mentors.`);   
  }
}