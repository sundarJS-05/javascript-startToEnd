// {} with if-else statement & function code is called SCOPE

if(true){
    let a = 'a'
    const b = 'b'
    var c = 'c'
}

// console.log(`a is ${a}`) -> gives 'a not defined' ERR
// console.log(`b is ${b}`) -> also gives 'b NOt defined ' ERR

// gives correct output - due to global scope; causes errors & confusions
console.log(`c is ${c}`)

// similarly..

var c2 = 250

// gives output as 250
console.log('earlier', c2)
if(true){
    let a2 = 23
    const b2 = 34
    var c2 = 235789
}

// but now gives - 235789 (as changed inside loop) ; again lots of cofnusions

console.log('after if-else', c2)

// for the above reasons, var must NOt eb used as per good coding practices

console.log('***breakk')

let x2 = 234
const x3 = 34


if(true){
    let x2 = 2
    const x3 = 2
    console.log('inner', x2, x3)

}

console.log('outer', x2, x3)


