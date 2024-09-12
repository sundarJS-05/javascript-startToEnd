

function userFn(username, loginCount, isLOggedIn){
    // left value is variable; so has this ;  right one is argument passed
    this.loginCount = loginCount

    return this
}

let guestUser = new userFn('jay', 12, true)

let guestUser2 = new userFn('yash', 15, true)

console.log(guestUser, '\n \n')

console.log(guestUser2);



