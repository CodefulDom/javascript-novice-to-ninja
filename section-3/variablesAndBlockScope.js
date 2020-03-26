let age = 19
let name = 'Elijah'
if (age > 7) {
  let age = 40
  let name = 'Dom'
  console.log(age)
  console.log(name)
}

console.log(age)
console.log(name)

const getName = (name) => {
  console.log(name)
  const greet = () => {
    return `Hey ${name}!` /* ? */
  }
  return greet()
}

getName(name) /* ? */
