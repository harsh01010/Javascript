const ps = require("prompt-sync");
const prompt = ps();

let arr = [1,2,3,10,20,30,40,400,3,500,4,2,3,455]
/*
let a = prompt(`enter a number `)
a = Number.parseInt(a)
arr.push(a)
*/
//console.log(arr)
 /*
while(1){
    let x = prompt(`enter a number `)
    x = Number.parseInt(x);
    arr.push(x);
    if(x==0) break
}
*/
//console.log(arr)

let arr2 = arr.filter((x)=>{
    return x%10 == 0
})
console.log(arr2)
let arr3 = arr.map((x)=>{
    return x*x
})
console.log(arr3)