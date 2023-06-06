/*
    for loop
    for in loop
    for of loop
    while loop
    do while loop

*/

for(let i = 0;i<5;i++)
{
    for(let j = 0;j<=i;j++)
    process.stdout.write("*");
    console.log();
}

let obj = {
    ali :0,
    mohammad : 2,
    jina :33,
    bajwa:44,
    rahat:99

}
for (let a in obj){
    console.log("marks of ", a," is ",obj[a]);
}

for(b of "String"){
    console.log(b)
}

const ps = require("prompt-sync");
const prompt = ps();

let n = prompt("enter the valur of n ");
n = Number.parseInt(n);
let i = 0;
while(i<n){
    console.log(n);
    i++;
}

// similarly do while loop