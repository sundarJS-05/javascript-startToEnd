const ar1 = [1,2,6,4]
const ar2 = [3,7,7,9]

ar1.push(ar2)
console.log(ar1, '\n')

let arConcatenated = ar1.concat(ar2)
console.log(ar1, '\n', arConcatenated, '\n')

const ar3 = [2,7,23,56]
let arSpread = [...ar2, ...ar3]
console.log(arSpread)


// in below array - there are 2 nestings inside the array - aka 2 Depths
let arB = [2,5, [23,6], [23, 5,[1,6,3]]]
let correctedArB = arB.flat(2)
console.log('***','\n', correctedArB)

console.log(Array.isArray(1,2))
console.log(Array.isArray([1,2]))

brknArr2 = Array.from('abcdefgty')
console.log(brknArr2, '\n')

testArr = Array.of('abcdefgty')
console.log(testArr)

// let brknArr3 = Array.from(100, 200, 300)
// console.log(brknArr3, '\n')

let Arr5 = Array.of(100, 200, 300)
console.log(Arr5)


