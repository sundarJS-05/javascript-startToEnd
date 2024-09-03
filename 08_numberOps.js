let num = 234
let num_cnvrtd = num.toString()
console.log(`The value of converted number is ${num_cnvrtd} & its data type is ${typeof num_cnvrtd}`)

let floatNum = num.toFixed(2)
console.log(floatNum)

console.log('*****')

let num3 = 123.234
let precsnNum = num3.toPrecision(7)
console.log(precsnNum)

console.log('*****')

let bigNum = 23000000000000
let convrtdBigNum = bigNum.toLocaleString('en-in')
console.log(convrtdBigNum)

console.log('****')

console.log('max val', Number.MAX_VALUE)
console.log('max safe', Number.MAX_SAFE_INTEGER)
console.log('min safe', Number.MIN_SAFE_INTEGER)
console.log('min val', Number.MIN_VALUE)

// Math Library

console.log('math round lower', Math.round(2.3456));
console.log('math round higher', Math.round(2.7456));
console.log('ceil of 2.2456', Math.ceil(2.2456));
console.log('round of 2.7456', Math.floor(2.7456));

console.log('random no b/w 0 to 1 using Math.random', (Math.random()) + 1 )


