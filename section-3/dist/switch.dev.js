"use strict";

var getGrade = function getGrade(grade) {
  if (grade >= 90) {
    console.log("Your grade is an A");
  } else if (grade >= 80) {
    console.log("Your grade is a B");
  } else if (grade >= 70) {
    console.log("Your grade is a C");
  } else if (grade >= 60) {
    console.log("Your grade is a D");
  } else if (grade >= 50) {
    console.log("Your grade is a F");
  }
};

getGrade(50);
/* ? */

var grade = 'A';

switch (grade) {
  case 'A':
    console.log("Your grade is an A");
    break;

  case 'B':
    console.log("Your grade is an B");
    break;

  case 'C':
    console.log("Your grade is an C");
    break;

  case 'D':
    console.log("Your grade is an D");
    break;

  case 'F':
    console.log("You have a failing grade");

  default:
    console.log('Not a Valid grade');
}