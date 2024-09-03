/* flasy values:-
false, 0 , -0 , "", BigInt 0n, NaN, null, undefined 

truthy values:
all others are truthy vlaues
*/

// checking if given value is NON-0

// if it's an array
const arr = []

if (arr.length !=0) {
    console.log('yes; array has objects')
    
}

// if it's an object
const obj = {}

if (Object.keys(obj).length !=0) {
    console.log('yes; object is NOn empty')
    
}
// since Object.keys(objName) - returns an array having the keys of the object

console.log('---')
// Nullish coalescing operator (??) -  Null & undefined
// used for cases like extracting data from DBs & servers; where 2 values could come; 1 can be null Or udnefined
// so this ?? operator returns the value wich is NOt null or udnefined

let valA 
valA = 6 ?? 14

let valB 
valB = null ?? 13

console.log(valA, '\n')
console.log(valB)

console.log('---')

// for multiple ?? - the 1st Non-null/undef value - ie 12 here is returned; 
// gthe operator does not check further values
let otuput = null ?? 12 ?? 23 ?? 1.3
console.log(otuput)

console.log('---')

// Ternary operator
const chaiPrice = 75

chaiPrice >40 ? console.log('greater than 40') : console.log('less than 40');



