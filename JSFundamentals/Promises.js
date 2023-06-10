
        /*
The solution to the callback hell is promises.
A promise is a promise of code execution.
The code either excute or fails, in both the cases the user will be notified.

syntax:
let promise = new promise(function(resolve,reject)){
    //executor
});

resolve and reject are two callbacks provied by javascript itseld they are called like this:
resolve(value) -> if the jaob is finished sucessfully
refect(value) -> if the job fails

the promise object returned by the new promise constructor has these properties:
1. state : Initially pending, then changes to either "fulfilled" when resolverd is called or "rejected" when reject is called
2. result: Initially undefined, then changes to value if resolved(resolved(value)) or when rejected(rejected(value))
*/

console.log("hello one ")

console.log("my name is jhon")
setTimeout(function(){
    console.log("hello in 2 seconds")
},2000)
console.log("hello world")
console.log("my name is "+"hello world")

let promise = new Promise(function(resolve,reject){
    resolve(56)
    console.log("hello")
})
console.log(promise)
   

