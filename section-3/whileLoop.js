// while loop

// do not forget to initialize your iterable!
let i = 0

let j = 0
const names = ['Dom', 'Elijah', 'Ezra']
while (j < names.length) {
  console.log([names[j]])
  j++
}

while (i < 5) {
  console.log(`in loop: ${i}`)
  // do not forget to increment your iterable
  i++
}

/*
Do While:
do while loops run until condition is false. appears to be best suited for one off situations when you need to do something at least once
*/

let h = 4
do {
  console.log(`value of is i is ${h}`)
  h++
} while (i < 5)
