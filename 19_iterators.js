/* for loop */

// for (let index = 0; index < 8; index++) {
//     const element = index;
//     if(index==5){
//         console.log('5 is the BEST no!');
        
//     }
//     console.log(element)
    
// }

/* operation
let index ; & index < (1st 2 condns) are checked 1st; 
based on them the loop logic ie. - const element = ... is exevuted
afetr that the 3rd clasue - ie. index++ is executed
then the loop repeats the same process again; & again */

/* Multiplication tables (0-5) */
// for (let i = 1; i <= 5; i++) {
//     console.log(`outer loop value ${i}`);
    
//     for (let b = 1; b <= 4; b++) {
//         console.log(`${i} mutlplied by ${b}=${i*b}`);
        
 
//     }
    
// }

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

