
// // 1st - not so preferred method
// // document.querySelector('#bridge').onclick= function(){ alert('bridge clicked')}

// // 2nd - preferred method
// // document.querySelector('#bridge').addEventListener('click', ()=> alert('bridge clicked!'),  false)

// // document.querySelector('#bridge').addEventListener('click', (event)=> console.log(event))


// document.querySelector('#images').addEventListener('click', ()=> console.log('images ID'), false)

// document.querySelector('#road').addEventListener('click', (event)=> {
//     console.log('road ID')

//     // using below fn stops event proagation ; so only 'road' ID will be printed to console; NOt 'images' ID
//     event.stopPropagation()

// }, false)


// document.querySelector('#google').addEventListener('click', (event)=> {

//     // stops default behavr - ie . redirection to GOOGLE.com; 
//     event.preventDefault()

//     console.log('Google link clicked..')

// }, false)

// // event propgoation happens like a bubble;  1st inner element; then  outer ; & futrher outer
// // using 'false' as 3rd paramter gives this order;  usign 'true' will reverse - ie, outer 1st- then inner



document.querySelector('#images').addEventListener( 'click' , (event)=>{
    console.log(event.target);

    // this removes the elemnt from DOM & page - on clicking
    // let a = event.target.parentNode
    // a.remove()

    console.log( event.target.tagName);
    console.log( event.target.id);

   
}, false)