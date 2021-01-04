'use strict';

import { Teacher } from "./teacher";

export class Student{
  public learn(){
    console.log('The student learning someting new.');
  
  }

  public question(teacher: Teacher){
    teacher.answer()
  }
}