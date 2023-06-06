
document.write("Let's Learn JAVASCRIPT")
//alert("JAVASCRIPT IS VERY EASY")
console.log("This is a console message")

/*
console object methods
console.log(console) -> log of console log , console methods
console.assert(55>33)
console.clear()
obj = {a:1,b:2,c:3}
console.table(obj)
console.warn("warning")
console.info("information")
console.error("error")
console.time(p1)
console.timeEnd()

*/
console.log(console)

console.time("forLoop")
for(let i=0;i<100;i++)
{
    console.log("hello world")
}
console.timeEnd("forLoop")


// alert , prompt and confirm 
/*
alert -> used to give alerts , used to invoke a mini window with a message
confirm -> for congirmation , shows a message and waitsfor the user to press ok or cancel , returns true for ok and false for cancel. 
prompt -> to get value input from the user 
*/

alert("this is alert message")
let a = prompt("enter the value of a: " , "default")
alert(`you entered ${a} of type `+typeof a)
let write = confirm("do you want to write it to the page")
if(write==true)
    document.write(a)