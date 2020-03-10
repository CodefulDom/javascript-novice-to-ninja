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

let value = email.indexOf('@')
console.log('%c%s', 'color: #e50000', `index of value: ${value}`)

// lastIndexOf - find the last instance of searched value
let myEmail = email.lastIndexOf('n')
console.log('%c%s', 'color: #733d00', `my email: ${myEmail}`)

// slice - chop from to end position passed as args
let slicedEmail = email.slice(0, 4)
console.log('%c%s', 'color: #00bf00', `slicedEmail: ${slicedEmail}`)

// substring - create a substring from org object. Start -> Get up to char
let substring = email.substr(0, 3)
console.log('%c%s', 'color: #0088cc', `substring: ${substring}`)
