"use strict";

var age = 19;
var name = 'Elijah';

if (age > 7) {
  var _age = 40;
  var _name = 'Dom';
  console.log(_age);
  console.log(_name);
}

console.log(age);
console.log(name);

var getName = function getName(name) {
  console.log(name);

  var greet = function greet() {
    return "Hey ".concat(name, "!");
    /* ? */
  };

  return greet();
};

getName(name);
/* ? */