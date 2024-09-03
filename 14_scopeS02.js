// Nested scopes working

function one(){
    const username = 'sundar'

    function two(){

        // has access to outer fn scope - ie username
        const career = 'music'
        console.log(username)

    }

    // does NOT have access to inner fn scope - ie career
    // console.log(career)

    two()
}

one()

// output of lines 3-20 is 'sundar' - ie. return val of fn - two()
// after that, one() is invoked in line 20; but its return val is two() [line 17] 
// so, if we comment EITHER line 17 OR 20; in both cases fn will not return any output

console.log('breakkk')

if(true){
    const username = 'sundar'

    if(username === 'sundar'){
        const activity = 'drives yulu mircale'
        console.log(username+ activity)

    }

    /* gives simialr NOt defined ERR , like in above fucntion
    console.log('inside if-else',activity); */
    
}

/* again gives NOt degfined ERR; since username - exists ionly in if-esle block scope
console.log('outside if-else', username); */

console.log('breakkk')

// just a fn declaration
function addOne(x){
    return (x+1)

}

console.log('addOne output',addOne(6))


// fn declared + assigned to a variable;  called an expression
const addTwo = function(x){
    return (x+2)
}

console.log('addTwo otuput', addTwo(5))

/* 
Value of addOne can also be accessed before lines 48-51 (its declaration)

But value of addTwo can ONLY be accessed AFTER line 59 (declration)

This is difference in abiove both ways of declaring functions


*/

