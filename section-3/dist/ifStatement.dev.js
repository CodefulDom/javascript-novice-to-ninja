"use strict";

var age = 25;

if (age > 20) {
  console.log('you are over 20 years old');
}

var ninjas = ['Elijah', 'Ezra', 'Johnny'];

if (ninjas.length >= 3) {
  console.log("that is a lot of ninjas");
}

var password = 'fjdkslfajdfjaklsd;jf';

if (password.length <= 8 || password === 'pass') {
  console.log("Your password does not meet our requirements");
} else {
  console.log("logged in!");
}

var isAdmin = null;

if (!isAdmin) {
  console.log("You are not an admin");
} else {
  console.log("Welcome, Admin!");
}