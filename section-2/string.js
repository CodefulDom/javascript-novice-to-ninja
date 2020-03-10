// String
console.log('Hello, World')

let email = 'dom@netninja.com'
console.log(email)

// string concatenation
let firstName = `Dom`
let lastName = `Hallan`
let fullName = `${firstName} ${lastName}`
console.log('%c%s', 'color: #00e600', `full name: ${fullName}`)

// getting characters
let getFullName = fullName[0]
console.log(getFullName)

// string methods
let split = fullName.split('')
console.log(split)

let upperCase = fullName.toUpperCase()
console.log('%c%s', 'color: #00a3cc', `upperCase: ${upperCase}`)

let replace = fullName.replace('D', 'J')
console.log('%c%s', 'color: #aa00ff', `replace: ${replace}`)
