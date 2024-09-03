let prgLangz = ['c++', 'java', 'perl','ruby', 'JS']

let eachVal = prgLangz.forEach( (lang)=>{
    // console.log(`languagess are ${lang}`)
    // trying 'return statemnt'
    return (lang)

})

console.log(`eachVal is ${eachVal}`)

/*
Thus, .forEach() method outputs the result of iterating over loop; but doesnt return any value as such  
*/

// Map method

let oddNums = [1,3,5,7,9,11,13,15,17]

let numGrtr4 = oddNums.filter(  (num)=>{
    return num>8

})
console.log(numGrtr4)

console.log('---------');


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const fiction = books.filter(  (bk)=>{
    return (bk.genre=='Fiction')

})

console.log(fiction, ' \n *******')

const hist1992 = books.filter(  (bk)=>{
    return (bk.publish>=1992 && bk.genre=='History')

})

console.log(hist1992)
