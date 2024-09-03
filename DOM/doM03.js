
/*
document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const tempLiList = document.querySelectorAll('li')
undefined
tempLiList
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object


NodeList is also NOT an array; So it doesnt allow methods like map, filter
Its properties - "Prototype" object - shows the AVl. properties

document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
const tempLiList = document.querySelectorAll('li')
undefined
tempLiList
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
tempLiList.style.color='brown
VM8227:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
tempLiList.style.color='brown'
VM8236:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:23
(anonymous) @ VM8236:1Understand this error
tempLiList
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
tempLiList.style.color='brown'
VM8333:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:23
(anonymous) @ VM8333:1Understand this error



select index 0,1,2 etc of NodelIST; then apply style; as below:-

mpLiList.style
undefined
// tempLiList
//  NodeList(3) [li, li, li]0: liaccessKey: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColIndexText: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowIndexText: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 1}attributes: NamedNodeMap {0: style, style: style, length: 1}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5500/DOM/DOM.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 20clientLeft: 0clientTop: 0clientWidth: 144contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}dir: ""draggable: falseeditContext: nullelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""inert: falseinnerHTML: "one"innerText: "one"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "li"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: linextSibling: textnodeName: "LI"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 20offsetLeft: 48offsetParent: body.bg-blackoffsetTop: 331offsetWidth: 144onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<li style=\"color: brown;\">one</li>"outerText: "one"ownerDocument: documentparentElement: ulparentNode: ulpart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: nullpreviousSibling: textrole: nullscrollHeight: 20scrollLeft: 0scrollTop: 0scrollWidth: 144shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {0: 'color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "LI"textContent: "one"title: ""translate: truetype: ""value: 0virtualKeyboardPolicy: ""writingSuggestions: "true"[[Prototype]]: HTMLLIElement(...)1: li2: lilength: 3[[Prototype]]: NodeList
// // tempLiList[1].style.color='purple'
'purple'


a.style.color='pink'
VM9329:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:14
(anonymous) @ VM9329:1Understand this error
a[1].style.color='pink'
VM9340:1 Uncaught TypeError: Cannot read properties of undefined (reading 'style')
    at <anonymous>:1:6
(anonymous) @ VM9340:1Understand this error
a[0].style.color='pink'
'pink'


// applying forEach method to syle each elemtn of NodeList:-
tempLiList
NodeList(3) [li, li, li]
tempLiList.forEach(  (element)=> (element.style.backgroundColor='lightblue') )
undefined
tempLiList.forEach(  (element)=> (element.style.backgroundColor='magenta') )
undefined