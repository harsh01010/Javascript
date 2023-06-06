/*
    window--> DOM , BOM , Javascript Core

window object represents browser window and provides methods to control it , It is a global object.
*/

window.console.log(window)

/*
dom:document object model
dom represents the page content as HTML

documet.body -> page body as js object
docuemnt.body.style.background = "green" -> changes page background to green


BOM:Browser object model
The browser Object Model (BOM) represents additional objects provided by the browser (host environment) for working with everything except the document.

the functions alert/confirm/prompt are also a part of the BOM

*/

// walking the dom
/*
DOM tree refers to the HTML page where all the nodes are objects there can be 3 main types of nodes in the DOM tree:
1. text nodes
2.element nodes
3. comment nodes

In an HTML page , <html> is at the root and <head> and <body> are it's children , etc.

A text node is always a leaf of the tree.


auto correction:
if an erroneous HTML is encountered by the browser if tends to correct it for example , if we put something after the body , it is automatically moved inside the body. Another example is <table> tab which must contain <tbody.
e.g <span>hello</div> --> browser will automaticlly close it with span tag.


walking the dom:
<html>
<head>
<title></title>
</head>
<body>                         document.body
.                                       document(more children)
.                             document.head         document.documentElement(page html tag)
.
.
</body>
</html>
*/

// accessing children of an element

/*
children of an element
direct as well as deeply nested elements of an element are called it's children

child nodes -> elements that are direct children , e.g. head and body are children for <html>

descendant nodes -> all nested elements , children , their children and so on ....

firstchild , lastchild , childNodes

element.firstChild => first child element (consider text(spaces))
element.lastChild => last child element
element.childNodes => all child nodes

elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length -1] === elem.lastChild

element.hasChildNodes() -> returns true if there are child nodes


Note:
childNodes looks like an array but it is not actually an array but(node list) a collection .
we can use Array.from(collection) to convert it into array.


$0 -> to get currently selected tag/element
$0.children -> gives of all children of selected element
$1 -> previous " " " " "  " "  " "  " "   "


notes of dom collections:
-> they are read-only
-> they are live element.childNOdes variables(reference) will automatically update if childNodes of element is child
->they are iteratable using for...of loop

Siblings and The Parent:
siblings are nodes that are children of the same parent.
e.g. head and body are siblings with parent html
body is said to be next or right sibling of head , head is saind to be th previous or left sibling of body

the next sibling is in nextSibling property , and the previous one in previousSibling
the parent is avaliable as parentNode
 */

// element only navigation
/*
firstChild -> considers text , comments as node
firstElementChild -> does not considers text , comments. .. as node

document.preciousElementSibling
document.nextElementSibling
document.lastElementChild

*/