  
'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
let codingHourInDay: number = 6;
let semesterTime: number = 17;
let workingDaysInWeek: number = 5;
let workingHoursInSemester: number;

workingHoursInSemester = codingHourInDay * workingDaysInWeek * semesterTime;
console.log(workingHoursInSemester);
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let avarageWorkHoursInWeek: number = 52;
let percentageOfCodingHourInSemester: number = (codingHourInDay * workingDaysInWeek) / avarageWorkHoursInWeek * 100;
console.log(percentageOfCodingHourInSemester + '%')