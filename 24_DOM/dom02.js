
/* 

->> to select class, we use dot; to selct ID we use hash
document.querySelector('h2')
<h2>​ Lorem Ipsum ​</h2>​
document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​


->> to select input elemtn attributes; use belwo syntax

document.querySelector('input[type="adf"]')
null
document.querySelector('input[type="password"]')
<input type=​"password" name id>​

document.querySelector('ul')
<ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​
const collUl = document.querySelector('ul')
undefined
collUl.querySelector('li')
<li>​…​</li>​::marker​"one"</li>​
const a1 = collUl.querySelector('li')
undefined
a1.style.backgroundColor='cyan'
'cyan'
a1.style.padding='15px'
'15px'
a1.style.padding='15 px'
'15 px'
a1.style.padding='10 px'
'10 px'
a1.style.padding='10px'
'10px'
a1.innerText
'one'
a1.textContent
'one'
a1.innerText='fifty five'
'fifty five'
