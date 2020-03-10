const nums = [1, 2, 3, 4, 5, 6]
console.log(nums)
for (const num of nums) {
  console.log(num)
}

let ninjas = ['Michelangelo', 'Donatello', 'Raphael', 'Leonardo']
console.log(ninjas[2])

const randomNinja = Math.floor(Math.random() * ninjas.length)
console.log('%c%s', 'color: #ffa640', randomNinja)

// array methods
const result = ninjas.join(' Turtle- ')
console.log(result)

// indexOf
console.log(ninjas.indexOf('Michelangelo'))

// push - alters og data
let addSplinter = ninjas.push('Splinter')
console.log('%c%s', 'color: #00b300', `addSplinter: ${ninjas}`)
