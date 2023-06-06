const ps = require("prompt-sync");
const prompt = ps();

function f(x,y){
    return 1+(x+y)/2
}


let a = 1 ,b = 2, c = 3;
console.log(f(a,b))
console.log(f(b,c))
console.log(f(a,c))

const sum = (a,b) =>{
    let c = a+b
    return c;
}

console.log(sum(9,6));


const obj = {
    hardik:44,
    shubhman:55,
    sky:99,
    ishan:33,
    rinku:88,
    hooda:44
}
for(a in obj){
    console.log("the marks of "+a+"is "+obj[a])
}
for(let i = 0;i<Object.keys(obj).length;i++)
{
    console.log("the marks of "+Object.keys(obj)[i],+' are '+obj[Object.keys(obj)[i]])
}

let val = 3

console.log(typeof val)
while(true){
    let x = prompt("enter a number ")
    if(x==val) break;
    else console.log("try again!")
}

/*
using arrow
let f = (x)=>{
            x.className = "yellow"
        }
*/