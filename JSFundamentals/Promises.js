
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


/*
consumers: .then() and .catch()
    The consuming code can receive the final result of a promise through then and catch

    the most fundamental one is then
    promise.then(function(result){
        //handle
    },function(error){
        //handle error
    });

If we are interested only in successful copletions, then we can provide only one function argument in then()

prmise.then((value)=>{
    console.log(value)
});
if we are interested only in errors , we can pass null as the first argument : .then(null,f) or we can use catch:
promise.catch((error)=>
{
    console.log(error);
})
*/

let p1 = new Promise((resolve,reject)=>{ // what ever is promised will be executed in bakcround
    console.log("promise is pending")
    setTimeout(()=>{
        //console.log("I am a promise and i am resolved")
        resolve(true)
        //reject(new Error("I am an error"))
    },5000)
    
})
let p2 = new Promise((resolve,reject)=>{ // what ever is promised will be executed in bakcround
    console.log("promise is pending")
    setTimeout(()=>{
        //console.log("I am a promise and i am rejected")
        //resolve(true)
        reject(new Error("I am an error"))
    },5000)

})
console.log(p1)
console.log(p2)

p1.then((value)=>{
    console.log(value)
})
/*p2.catch((error)=>{
    console.log(`some error occured in p2`)
})*/
p2.then((value)=>{
    console.log(value)
}
,(error)=>{
    console.log(error)
})
