'use strict';

import { Student } from "./student";

export class Teacher{
  public teache(student: Student){
    student.learn()
  }

  public answer(){
    console.log('The teacher is answering.');
    
  }
}