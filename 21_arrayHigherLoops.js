
/* for of */

// let ary = [1,4,5,7,23,34,898,123,23]

// for (const x of ary) {
//     console.log(x)
    
// }

// let str = 'asfwdyr'

// for (const x of str) {
//     console.log(`each element of string is ${x}`);
      
// }

/* MAPS
Map is another JS obhect - holds key-value pairs; all unique (NO duplicate) vakues */

// const map = new Map()
// map.set('in', 'India')
// map.set('jap', 'Japan')
// map.set('esp', 'Spain')
// map.set('uae', 'UAE')

// console.log(map, '\n')

// for (const [abbr,country] of map) {
//     console.log(abbr,'\t', country)
    
// }

console.log('---------')

const trains ={
    1: 'rajdhani',
    2: 'shatabdi',
    3: 'vande bharat',
    4: 'humsafar',
    5: 'jan shatabdi'
}

// for (const [a,b] of trains) {
//     console.log(`index is ${a} ;  train is ${b}`)
    
// }

/* therefore objects are NOT dierectly iterbale with for-of loop */

/* for in loop for Obj iteration */

for (const key in trains) {
    console.log(key, '\t', trains[key])
}
let arr2 = ['java', 'c++', 'python', 'swift', 'perl', 'JS' ]

console.log('------')

/* also iterates over Arrayss */
for (const key in arr2) {
    console.log(key, '\t', arr2[key])

}

console.log('------')

/* MAP iteration using for-in  */
// const map = new Map()
// map.set('in', 'India')
// map.set('jap', 'Japan')
// map.set('esp', 'Spain')
// map.set('uae', 'UAE')

// for (const key in map) {
//     console.log(key)

// }

/* does NOT wokr, as Maps are non-iterbale  */

/* forEach function ; iterates through every element in Array - arr2  
// callback fns dont have name (ie. anonymous)*/

// arr2.forEach( function  (arr2Item){
//     console.log(arr2Item)
// }  )


/* 3 params of forEach - in order are - array itme, array index, full Array value*/
arr2.forEach( (a, b, f) =>{
    console.log(`array item is ${a} \t array index is ${b}`)
    console.log('fullArray is', f)
}  )
// callback fns dont have name (ie. anonymous)

let obj5 = [
    {'key' : 'd',
    'val' : 'd01'

    },

    {"key": 't',
    'val': 't02'
    },

    {"key": 'ah',
     'val': 'ah02b'   
    },
    {"key": 'et',
    'val': 'et26'
    }

]

obj5.forEach( (iter)=>{
    console.log(`keys are ${iter.key}; values are ${iter.val}`)
})