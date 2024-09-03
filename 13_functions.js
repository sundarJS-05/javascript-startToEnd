/* if we give console.log as output of a fn, 
it will not get stored to other variables adn return values */

function add(a,b){
    console.log(a+b)
}

add(3,5)
let addR = add(3,5)
console.log('\n', addR)

// we need to make a fn RETURN a value, as below:

// 1st
function add2(a,b){
    let addition = a+b
    console.log('extra line 1')
    console.log('extra line 2')
    return addition

}

add2(452435,34345)
let reslt2 = add2(452435,34345)
console.log('\n', reslt2)

console.log('****')

function powerfn(a,b){
    return Math.pow(a,b)

}

// A fn will not automaticallty print the returned value, when it is called
powerfn(3,4)

// we need to do console.log to print its return value
console.log(powerfn(4,7))

// REST operator (same as SPREAD for Objects) for fn

function addNos(...a){
    return a

}

console.log( addNos(7, 5,13,456) )



