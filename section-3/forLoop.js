// for loop
for (let i = 0; i < 5; i++) {
  console.log(`${i}`)
}

const names = ['shawn', 'mario', 'luigi']
names.forEach((name) => {
  console.log(name.split(''))
})

for (let i = 0; i < names.length; i++) {
  let html = `<div>${names[i]}</div>`
  console.log(html)
}
