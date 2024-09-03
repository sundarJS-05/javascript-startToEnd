
let sym = Symbol('123')

let obj1 = {
    name: 'a',
    'type': 'b',
    variety: 'c',
    [sym]: 'symbol01'
}

console.log(obj1.type, '***')
console.log(obj1['type'])

console.log(typeof obj1[sym], typeof [sym],  '&', obj1[sym])

obj1.variety = 'c2'

console.log(obj1 , '\n *****')

Object.freeze(obj1) 
// Doesn't allow changes in key, values anymore; Irreversible action

obj1.name = 'a2'
obj1.name = 'a3'

console.log(obj1, '\n ***')

let obj2 = {
    key1: 'val1',
    key2:'val2'
}

// adding fn as key value pair to obj1
obj2.hellofn = function(){
    console.log("hello ")
}

console.log(obj2.hellofn, '\n **')

obj2.customfn = function(){
    console.log(`key1's val is ${this.key1};  key2's val is ${this.key2}`)
}

console.log(obj2.customfn() )