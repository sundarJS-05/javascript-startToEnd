// create new arrway

const arr1 = new Array(1, 'jack', true, 4)
arr1.push('a', 4)

let s1 = Symbol('234')

let arr2 = [1,3, 'b']
arr2.push(s1)
console.log(arr2, "break")

arr1.push(s1)
console.log(arr1)

let popped_el = arr1.pop()
console.table( [popped_el, arr1])

arr1.unshift(2, 'ared')
console.log(`arr1 after unshift is: ${arr1}`)

arr1.shift()
console.log(`arr1 after SHift is: ${arr1}`)

console.table( [arr1.includes(4), arr1.indexOf('jack')])
arr1.join()

console.log('after join - ',arr1, 'data type after join', typeof(arr1), '\n' )

console.log(typeof arr1.join())

console.log("BREAKK")

let ary2 = [1,4,6,7,8,3]
let sliced = ary2.slice(2,4)
console.log(`sliced part is ${sliced} & ary2 after slicing is ${ary2}`)

console.log(ary2)

let spliced = ary2.splice(1,2)
console.log(`sPLiced part is ${spliced} & ary2 after sPLicing is ${ary2}`)

// Slice - doesnt change the orgnl array; Splice - changes the orgnl array
