let oddNums = [1,3,5,7,9,11,13,15,17]

let sqrNums = oddNums.map(  (num)=>{
    return (num**2)

})

console.log(sqrNums);
console.log('-------');


// multiple operations - chaining
let evenNumSqrGrtr200 = oddNums
                      .map( (num)=>(num+1))
                      .map( (num)=> (num**2))
                      .filter( (num)=>(num>200))

console.log('sqr of even nos that are >200 are:', evenNumSqrGrtr200);

console.log('-------')

const sumOfLoopNos = oddNums.reduce( (acumltor, crntVal)=> {
    console.log(`acumltor is - ${acumltor} | crntVal is ${crntVal}`)
    return (acumltor + crntVal)

}, 0)
// 0 is the intializing value for acumltor

console.log('sum of nos in oddNums array is :', sumOfLoopNos)


let ar04 = [
    {
        name: 'a',
        no: 12 
    },
    {
        name: 'a2',
        no: 273
    },
    {
        name: 'a3',
        no: 234
    },
    {
        name: 'a4',
        no: 47
    }

]

let totalNo = ar04.reduce(  (acml, item )=> (acml + (item.no) ) , 0 )

console.log('sum of the nos in 4 objects is ', totalNo);

