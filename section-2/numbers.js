const age = 37
console.log(age)

let radius = 10
let pi = 3.14
console.log(`Radius: ${radius}, Pi: ${pi}`)

let area = pi * radius ** 2
console.log('%c%s', 'color: #917399', `area: ${area}`)

// order of operations - BIDMAS
/* 
B - Bracket
I  - Indices(Exponents)
D - Division
M - Multiplication
A - Addition
S - Subtraction
*/

let likes = 1
console.log('%c%s', 'color: #d90000', `likes: ${(likes += 20)}`)
