const name = 'sundar'
const githubrepoCount = 8

const sentence = `My name is ${name} and my Github repo count is ${githubrepoCount}`
console.log(sentence)

// 2 ways of declaring strings

// 1st
const str1 = 'adaf'

// 2nd
const str2 = new String('ehujafdsgdfy')
console.log(str2)

// ************


// Common String methods
console.log(str2[2])
console.log(str2.__proto__)
console.log(str2.length)
console.log(str2.toLocaleUpperCase())
console.log(str2.charAt(2))
console.log(str2.indexOf('h'))

const subString = str2.substring(0,5)
console.log(subString)

const str4 = 'adasgfdsygdy'

const slicedString = str4.slice(-6,-4)
console.log(slicedString)

const incorgble_str = " fsf af  a   "
console.log(incorgble_str.trim())

let sentnc = "sder%sdd%aaff%"
let sent_modfd = sentnc.replace('%', '|')
console.table( [sentnc, '***', sent_modfd])

console.log(sentnc.includes('b'))

let sent2 = 'this-is-a-good-way'
console.log( sent2.split('-') )

