
document.querySelector('#images').addEventListener( 'click' , (event)=>{
    console.log(event.target);

    // this removes the elemnt from DOM & page - on clicking
    // let a = event.target.parentNode
    // a.remove()

    console.log( event.target.tagName);
    console.log( event.target.id);

   
}, false)