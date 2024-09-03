const user ={
    username: 'sundar',
    password: 'sfsdg',
    welcomMsg: function(){
        // 'this' keyword needs to be used for current scope (aka. 'context')
        console.log(` ${this.username} logged in; password is ${this.password}`)

        console.log('1st contxt', this)
        // this must show password as 'sfsdg'
    }

}


user.welcomMsg()

// assinging new value; ie. changing context
user.password = 'gdrey'

// jhereafter, password value will be of line 14 (not that insaide if-else)
user.welcomMsg()

console.log('2nd contxt', this)
// this must show password as 'gdrey' - ie context is changed

console.log('break')

function chai(){
    console.log('this context inside chai()', this)
}

chai()

function chai2(){
    let username = 'sundar'
    console.log(this.username)
}

// returns output as 'undefined';  unlike objects - this conetxt is NOt retuned 
chai2()
console.log('----------')

const chaiV2 = function(){
    let username = 'sundar'
    console.log(this.username)

}

// this also retunrs 'undefined';  just like chai2()
chaiV2()


const arrowChai = ()=>{
    let tea = 'chai'
    console.log(this.tea)
    console.log(this)

}

console.log('output of arrowChai below');
arrowChai()

// 1st way of declaring ArrowFn- most common

let concat1 = (x,z)=>{
    return (x+z)
}

console.log(concat1('a','b'))

console.log('-----');


// 2nd way of declaring ArrowFn- IMPLICIT return
// This doesnt have {} scope block; & also doe NOtbhave 'return' statement
let concat2 = (x,z)=> (x+z)

console.log(concat2('a','b'))
console.log('---')

// to return object with IMPLICIT return
let random2 = (username)=> ({username: 'sundar'})
console.log(random2())
