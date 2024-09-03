
// writing below phrase will treat all code as per LATEST stds. - ECMA stds.
"use strict"

/* alert doesnt work in NodeJS
alert("hello") */


/* PRIMITIVE datatypes - 7 types

Number - 0 till -/+ (2^53) - ie. 2 to power 53

Bigint - for nos beyond 2^53

String -  "adfaf"

Boolean -  true ;  false

null - representation of empty value

undefined - value NOt yet defined ; eg -  let  var2;

symbol -  used for uniqueness */

let age1 = 34
let age2
null

console.table( [typeof(age1), typeof(age2),  typeof(null)])

// Symbol declrn
let sy1 = Symbol('245')
let sy2 = Symbol('245')
console.log(sy1)
console.log(sy2)
console.log(sy1==sy2)

/* 
Non primitive OR Reference datatypes
Their reference is allocated in memory'

Array

Objects

Functions

*/
