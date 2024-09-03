// // normal invoking

let fdb1 = function db1(){
    return ('db1 connected')
}
console.log(fdb1(), '---');

// /* IIFE (immediately invoked functional expression) invoking
// enclose fn in () & put a () after that - analogous to calling/executing the whole fn block. */

(function db2(){
    console.log('db2 connected');
})() ;

/* manadotry to put semicolons after all fn calls -- lines 6, 13; else it will keep giving wierd errors
else further fn - ie line 17 onwards will give error
*/

// console.log(` ${fdb1()} & '\n' ${fdb2}`)

// passing name argument ('guestuser02) to IIFE
((name)=>{
    console.log(`IIFE arrow fn - ${name}`);
} )('guestuser02') ;