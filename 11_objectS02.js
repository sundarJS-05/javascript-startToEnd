// 1st way of creating obj
let obj01 = {
    a: '1',
    b: '2'
 }

// 2nd way - Singleton - of obj creation

let obj02 = new Object()

console.log(obj01, '\n ** ', obj02)

console.log('BREAk')

let objA = {
    key1: 'val01',
    key2: {
        key2a: 'val2a',
        key2b: {
            key2b01: 'val2b01',
            key2b02: 'val2b02'

        }
    }
}

console.log(objA.key2.key2b)

console.log('BREAk')

let objA1 = {a:'1',b:'2'}
let objA2 = {b1:'0ab',b2:'0bb'}

// merging these 2 objs into 1
console.log(objA1, objA2, '\n')
let objA3 = Object.assign(objA1, objA2)
console.log('\n ###', objA3)

// 2nd way fo doing Line 36 thing,  add empty obj {} as 1st param

let objA03 = Object.assign({}, objA1, objA2)
console.log('\n ***', objA03)

// 3rd & best way fo doing Line 36 thing -- using Spread operator

let objA5 = {...objA1, ...objA2, ...objA3}
console.log('\n ->>', objA5)

console.log('\n', typeof(Object.keys(objA5)) , '\n --',  Object.keys(objA5))
// Object.keys() -> returns keys of an object as ARRAY
// similarly Object.values() ---

console.log('\n', typeof(Object.values(objA5)) , '\n --',  Object.values(objA5))

// cehck if  present/not in obj
console.log(objA5.hasOwnProperty('b1'), '\n ***', objA5.hasOwnProperty('hari puttar'))



