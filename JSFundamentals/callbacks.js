 /*
 Asynchronous actions are the actions that we initiate now and they finish later. e.g. setTimeout
 synchronous actions are the actions that initiate and finish one by one.
 e.g:
 let a = prompt(`enter the value of a`)
 let b = prompt(`ente the value of b `)
 console.log("vlaue of a is ${a} and b is ${b}")
 */

 function loadScript(src,callback){ // functins is passed
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("SRC: "+src);
        callback(null,'world');
    }
    // handling errro using callbacks
    script.onerror = function(){
        console.log("error loading script with SRC: "+src);
        callback(new Error("src got some error"));
    }
    document.body.appendChild(script);
}

    function hello(error,name){
        if(error)
        {
            console.log(error);
            return
        }
        alert(`hello `+name)
    }
    function goodmorning(){
        alert(`good morning`);
    }

 loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js',hello)

 /*
 This is called 'callback based' style of async programming. A function that does something asynchronously should provide a callback argument where we put the function to run after it's complete.
 */

 /*
 when we have callback inside callbacks , the code gets difficult to manage.
 loadscript(...){
        loadscript(...)
            loadscript(...)
                loadscript(...)
                    loadscript(...)
                        loadscript(...)
                            .......
 }

 as calls become more nested , the code becomes difficult to manage.
 This is sometimes called "callback Hell" or "Pyramid to doom"
 The "pyramid" of these calls grows towards the right with every asynchronous action,soon it spirals out of control , so this way of coding is not very good.
 */