"use strict";

// for loop
for (var i = 0; i < 5; i++) {
  console.log("".concat(i));
}

var names = ['shawn', 'mario', 'luigi'];
names.forEach(function (name) {
  console.log(name.split(''));
});

for (var _i = 0; _i < names.length; _i++) {
  var html = "<div>".concat(names[_i], "</div>");
  console.log(html);
}