/* writing console.log(document) gives some of the details
that console.log(window.document)  gives
other details cna be obtained by console.dir(document) */

/* document.links - returns HTML Collection - diff from an Array
using document.links[3] gives 3rd index/4th element - so simialr Array like properties */

/* document.getElementById('firstHeading)
VM2826:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
document.getElementById('firstHeading')
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​<span class=​"mw-page-title-main">​Brendan Eich​</span>​</h1>​
document.getElementById('firstHeading').innerHTML
'<span class="mw-page-title-main">Brendan Eich</span>'
document.getElementById('firstHeading').innerHTML='<h3>Chai aur JS</h3>'
'<h3>Chai aur JS</h3>'
document.getElementById('firstHeading')
<h1 id=​"firstHeading" class=​"firstHeading mw-first-heading">​…​</h1>​<h3>​Chai aur JS​</h3>​</h1>​

document.getElementById
ƒ getElementById() { [native code] }
document.getElementById('')
null
document.getElementById('heading')
null
document.getElementById('title')
<h1 id=​"title" class=​"heading">​ DOM Manipulation ​</h1>​
document.getElementById('title').class
undefined
document.getElementById('title').id
'title'
document.getElementById('title').className
'heading'
document.getElementById('title').idName
undefined
document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute()
VM534:1 Uncaught TypeError: Failed to execute 'getAttribute' on 'Element': 1 argument required, but only 0 present.
    at <anonymous>:1:34
(anonymous) @ VM534:1Understand this error
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').getAttribute('className')
null
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class','heading5')
undefined
document.getElementById('title').getAttribute('class')
'heading5'

using setAttribute method overrides the existing value
So earlier abov0e, the class name was heading; but when I used setAttribute; afetr that it became heading5 even in my HTML file running on Live Server

title
<h1 id=​"title" class=​"heading">​ DOM Manipulation ​</h1>​
title.style.backgroundColor='cyan'
'cyan'
title.style.backgroundColor='lightblue'
'lightblue'
title.style.backgroundColor='light-blue'
'light-blue'
title.style.backgroundColor='lightBlue'
'lightBlue'
title.style.backgroundColor='light-blue'
'light-blue'
title.style.backgroundColor='light-black'
'light-black'
title.style.backgroundColor='light-green'
'light-green'
title.style.backgroundColor='lightgreen'
'lightgreen'
title.style.padding='11px'
'11px'
title.style.borderRadius='8px'
'8px'

title.innerHTML
' \n                DOM Manipulation\n                <span style="display: none;"> span texT</span>\n                \n            '
title.innerText
'DOM Manipulation'
title.textContent
' \n                DOM Manipulation\n                 span texT\n                \n            '

.innerText()  does NOT return hidden elements;  whereas textContent() returns hidden elemtns as well
