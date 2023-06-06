/*
arrays are not homogeneous (content wise) in js.
index access is allowed
arrays are mutable
in javascript arrays are objects
*/
/*
let a = [1,2,"hello",4,5.66,true]
console.log(a)
console.log(a[4]) 
console.log(a.length)
a[0] = -1
console.log(a)
console.log(typeof a )

let b = a.toString()
console.log(b)
let c = a.join(" and ")
console.log(c , typeof c)
a.pop()
console.log(a) // pop return the last elements
a.push(true) // push returns the new array length
console.log(a)
let r = a.shift() // shift delets the first number and return it
console.log(r)
a.unshift(55)
console.log(a)

let num = [1,2,3,4,5,22,33,6,7,8,9.-1,0]
delete num[0] 
delete num[4]
console.log(num)
let numore = [10,11,12,13,33,11]
console.log(num.concat(numore,[4,6,4]))
num.sort()
console.log(num) // sorts alphabatically

let compare=(a,b)=>{
    return a-b
}

num.sort(compare )
console.log(num)

num.reverse()
console.log(num)
num.reverse()
console.log(num.length)
num.splice(2,3,101,102,103,104) // start from index 2 and delete 3 elements put 101, 102, 103 ,, since there is one extra argument(104) hence it will just inserted // modifies the source array
console.log(num)
console.log(num.length)

// arr.slice(start , end+1)


*/

let num = [3,44,5,3]

for(let i = 0;i<num.length;i++)
    console.log(num[i])

num.forEach((Element)=>{
    console.log(Element*Element)
})

// Array.from -> used to create an array from any other object
let name = "HINDUSTAN"
let arr = Array.from(name)
console.log(arr) 

for (let i of num){ // it gives values
    console.log(i)
}

for (let i in num){ // it gives keys
    console.log(num[i])
}