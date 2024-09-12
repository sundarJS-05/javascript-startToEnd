
// // promise creation
// let prom1 = new Promise( (resolve, reject)=>{

//     // any async task
//     setTimeout( ()=>{
//         console.log('async task done');

//         // resovle - is madnatory for connecting promsie to '.then()'
//         resolve()
    
//     },  1500)

// })

// // resolve OR rejcect

// prom1.then( ()=>{
//     console.log('promise consumed');
    
// })


// new Promise(  (resolve, reject)=>{
//     setTimeout( ()=>{
//         console.log('another async')
//         resolve()

//     }, 1200)
// })
// .then( ()=>{
//     console.log('async 2 resovled');
    
// })

// let promise3 = new Promise( (resolve, reject)=>{
//     setTimeout(  ()=>{
//         resolve(
//             {username: 'a', password: 'b05'}
//         )

//     }, 1600 )
// })
// promise3.then( (params)=>{
//     console.log(params);
    
// })


/* 
Below codes give error

let promise04 = new Promise( (resolve, reject)=>{
    setTimeout(  ()=>{

        let error = true
        if(!error){
            resolve(
                {username: 'a', password: 'b05'}
            )
        }
        else{
            reject('ERROr msg')
        }

    }, 1600 )
})

let userDetails = promise04.then( (user)=>{
    console.log(user);
    console.log(user.username);
    
})

console.log(userDetails);
*/

/* let promise04 = new Promise( (resolve, reject)=>{
    setTimeout(  ()=>{

        let error = false
        if(!error){
            resolve(
                {username: 'a', password: 'b05'}
            )
        }
        else{
            reject('ERROr msg')
        }

    }, 1600 )
})


// chainign promosies with catch, then
promise04.then( (user)=>{
    console.log(user);
    console.log(user.username);
    
}).then( (username)=>{
    console.log(username);
    

}).catch( (error)=>{
    console.log(error);
    
})


let promise5g = new Promise( (resolve, reject)=>{
    setTimeout(  ()=>{

        let error = false
        if(!error){
            resolve(
                {username: 'user4', password: 'b05'}
            )
        }
        else{
            reject('anotehr ERR')
        }

    }, 1600 )
})

// using async await
let utilizeProm5g = async ()=>{

    try{
    let response = await promise5g
    console.log(response);
    }
    catch(error){
        console.log(error);

    }
    
}

utilizeProm5g()  */

/* approach 1 - using ASYNC AWAIT 
let getAllUsers = async ()=>{
    // fetch returns a promsie
    let rpn = await fetch('https://jsonplaceholder.typicode.com/users')
    // console.log("resopnse is", rpn);
    

    try{
    let dataG = await( rpn.json() )
    console.log("data is ", dataG)
    }
    catch(error){
        console.log(error);
        

    }
}

getAllUsers()   */