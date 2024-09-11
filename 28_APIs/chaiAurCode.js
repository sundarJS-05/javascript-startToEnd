
// create a new XML HTTP req object
let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://randomuser.me/api/')

xhr.onreadystatechange = ()=>{
    console.log(xhr.readyState);

    if(xhr.readyState==4){
        console.log('***', this.responseText)        
    }
    
}

xhr.send()