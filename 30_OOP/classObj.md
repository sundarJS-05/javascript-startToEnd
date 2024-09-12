
OOP terms
Features of OOP:
Abstraction | Encapsulation | Inheritance | Polymorphism

Object literal - means {} (empty obj) - ie. literally an obj
-> Constrcutor function
-> Prototypes
-> Classes
-> Instances (new, this, ..)

'this' keyword is sued to miove to current conetxt - for applying the requsitie codes

like - last week's 'Thurs' is diff from today (12.9.24) - will be diff from next week's Thurs

--------------


// cinstructor function
let prom2 = new Promise()
let date3 = new Date()
'new' keyword is a constrcuor function here

---------

let userObj = {
    username: 'sundarJS',
    loginCount: 8,
    signedIn: true,

    getUserDetails:  function(){
        console.log("got login count..", this.username)
        console.log('this inside getUserDtls func', this)
    }
}

console.log(userObj.getUserDetails() );

console.log('this in global scope', this)