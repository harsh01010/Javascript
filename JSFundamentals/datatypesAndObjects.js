/*
primitive datatypes
    N ull
    N umber 
    S tring
    S ymbol
    B boolean
    B igint
    U undefined
object is a nonprimitive datatype
*/
let a = null
let b = 345
let c = true
let d = BigInt("444")
let e = Symbol("i am a symbol")
let f = undefined
let g = "ludo"

console.log(a,b,c,d,e,f,g)
console.log(typeof c)

const item = {
    "harry" : true,
    "shubh" : false,
    
}
console.log(item["harry"])

let y = "name"
let x = 5
console.log(y + x , x+ y)

const a1 = {
    'name': "lord",
    section : 1,
    isgood : false
}
console.log(a1)

a1['name'] = "mango"
console.log(a1)