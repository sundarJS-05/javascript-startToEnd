
// get same output as Approach 1 - using promise, .then()

fetch('https://jsonplaceholder.typicode.com/users')
.then(  (data1)=>{

    // console.log("intrmdt data - after 1st .then() is", data1, '**** \n ');
    return data1.json()
    
    
}).then( (finalData)=>{ 
    console.log("final data - after 2nd .then() is ", finalData, ' *** \n');
    return finalData
    
})
.catch(  (err1)=>{
    console.log(err1);
    
})