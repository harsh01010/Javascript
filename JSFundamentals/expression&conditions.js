/*
+,-,/,*,**,%, 
++,--  
+= , -=  , *= , /= , **=
== , != ,  ===(number and string) , !==(number and string) , ?(ternary)
&& , || , !
 

if , if else , if else if
*/

//let a = prompt("what's your age")
//console.log(typeof a)
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let a =  prompt("enter the value of a ")
//console.log("the value of a is",a)
a = Number.parseInt(a);
//console.log(typeof a)
if(a<0){
    console.log("this is not a valid age")
}
else if(a<18 && a>=9)
{
    console.log("you are a kid and you can think of driving after 18");
}
else if(a>9)
{
    console.log("you can drive")
}

// switch case

const expr = 'papayas';
switch(expr){
    case 'oranges':
        console.log('oranges are 60rs per kg')
        break;
    case 'papayas':
        console.log('Mangoes and papayas are 60rs per kg')
        break;
    default:
        console.log('sorry,we are out of &{expr}')
        
}


console.log("you can",(a<18?"not drive":"drive"))