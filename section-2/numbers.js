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

const title = `best reads of 2020`
const author = `Dom`
const bookLikes = 30
console.log(`The ${title} by ${author} has ${bookLikes} likes.`)

const html = `
  <h2>${title}</h2>
  <p>By: ${author}</p>
  <p>Likes: ${bookLikes}</p>
`

let htmlResultContainer = document.createElement('div')
document.body.appendChild(htmlResultContainer)
