const ps = require("prompt-sync");
const prompt = ps();

count = 0
//generating the random number
let x = Math.floor((Math.random()*100)+1)
console.log(x)
while(count < 100)
{
    let guess = prompt(`Guess the number: `)
    guess = Number.parseInt(guess)
    if(guess > 100 || guess <0)
    {
        console.log("Invalid guess(outofrange)")
        continue
    }

    if(x==guess)
    {
        console.log("You have guessed the generated number correctly!")
        break
    }
    else if(guess<x)
    {
        console.log("Your guess is smaller than the generated number")
    }
    else 
    {
        console.log("Your guess is greater than the generated number")
    }
    
    count++
    if(count==100)
    {
        console.log("You have exceed the number of guesses")
    }
    
}