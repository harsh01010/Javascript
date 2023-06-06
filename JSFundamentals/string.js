/*
let x = "string"
let y = 'string'
strings are mutable
index accessing allowed
let sentence = `boy2 is a friend of boy1`
console.log(sentence.length)
//escape sequence
let fruit = 'bana\'na'

string is immutable in javascript , whenever we use any method we get new string returned by that method.

*/
let boy1 = 8
let boy2 = 9

let sentence = `${boy1} is a friend of ${boy2}` // this is called string interpolation
console.log(sentence);

console.log(sentence.length) // property
console.log(sentence.toUpperCase()) // function
console.log(sentence.toLowerCase())
console.log(sentence.slice(2,10)) // start , end-1 or only start
console.log(sentence.replace('is','is not'))
console.log(sentence.concat(' this is javascript'," it is used by noobs to develop shitty websites"))

let str = "    this is string        ";
console.log(str)
console.log(str.trim())

let str2 = 'this is another string'
let word = 'another'
console.log(`the word "${word}" ${sentence.includes(word)?'is':'is not'} in the sentence`);

let str3 = "please give me 1000 rupees"
let amount = str3.slice("please give me ".length , "please give me 1000".length)
amount = Number.parseInt(amount)
console.log(amount)




