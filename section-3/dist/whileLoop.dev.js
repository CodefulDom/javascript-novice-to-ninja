"use strict";

// while loop
// do not forget to initialize your iterable!
var i = 0;
var j = 0;
var names = ['Dom', 'Elijah', 'Ezra'];

while (j < names.length) {
  console.log([names[j]]);
  j++;
}

while (i < 5) {
  console.log("in loop: ".concat(i)); // do not forget to increment your iterable

  i++;
}
/*
Do While:
do while loops run until condition is false. appears to be best suited for one off situations when you need to do something at least once
*/


var h = 4;

do {
  console.log("value of is i is ".concat(h));
  h++;
} while (i < 5);