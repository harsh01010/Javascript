/*
map ,filter-> used to create a new array
reduce -> return a value
*/

let arr = [45,23,21]

let a =arr.map((value , index , array)=>{
    console.log(value,index,array)
    return value+1
}) // creates a new array a with values equal to values + 1

console.log(a) // array created by map method

let arr2 = [45,23,21,0,3,5]

let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

let arr3 = [1,2,3,5,2,1]
let a3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})

console.log(a3) // (((1+2)+3)+5+2)+1