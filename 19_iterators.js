/* for loop */

for (let a = 1; a < 19 ; a++) {

    if (a%5==0) {
        console.log(`${a} is divisible by 5; so been skipped`)
        continue
        
    }

    if (a==16) {
        console.log(`a is now ${a}; loop terminated`)
        break
        
    }
    console.log(`val of a is ${a}`)
    
}

