let str1 = 'asd'
let str2 = 3
let str3 = 5
let str4 = str1+str2+str3
console.table([ typeof str4, str4])
// here, the addn operator takes str2,str3 types as string - based on 1st val (ie. str1) type

console.log('BREAK')


let str11 = 3
let str21 = 6
let str31 = 'afrt'
let str41 = str11+str21+str31
console.table([ typeof str41, str41])

// here, the addn operator takes str21 type as string - based on 1st val (ie. str11) type; but str31 is treated as String as such

console.log('BREAK')

let counter = 23
counter++
++counter
// oprns in line 22 as well as 23 are same in output; either cna be used to increment value by 1
// line22 increments after value (postfix); line 23 - before - ie pr
efix
console.log(counter)