let progLang = {
    a1: 'python',
    a2: 'java',
    a3: 'swift',
    a4: 'JS -- theBest'

}

// DESTRUCTURING - using {}
// Below is similar to -> progLang.a4 Or progLang['a4']

const {a2} = progLang
console.log(a2, '\n', {a2})

// replacing key Name

const{a2: key2} = progLang
console.log(a2, '\n', key2)