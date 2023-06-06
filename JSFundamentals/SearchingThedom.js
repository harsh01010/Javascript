/*
searching the Dom:
Dom navigation properties are helpful when the elements are close to each other.If they are not close to each other , we have some more methods to search the DOM.

->document.getElementById
    this method is usedto get element with a given "id" attribute

    let span = document.getElementById("span")
    span.style.color = "red"

->document.querySelectorAll
    returns all elements inside an element matching the given css selector
->document.querySelector
return the firt element for the given css selector 
an efficient version -> elem.querySelectorAll[0]
->document.getElementByTagName
returns elements with the given tag name
->document.getElementsByClassName
returns elements that have the given css class
->document.getElementsByName
searches elements by the name attribute
*/
/*
matches closet and contains method:

elem.matches("selector")->to check if element matches the given css selector
elem.closet("selector") -> to look for the nearest acsestor that matchs the given css selector. the elem itself is also cecked
elemA.contains(elemB) -> returns true if elemB is inside elemA(a descedant of elemA) or when elemA == elemB
*/