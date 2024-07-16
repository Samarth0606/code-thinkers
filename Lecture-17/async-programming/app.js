

// console.log("start")
// console.log("run after 4 secs")
// console.log("end")

// -----------------------------

// how can i achieve async behaviour
//method -> setInterval() => delay provide

// setInterval(cb fn , timedlay)
// setInterval(function(){} , 4000)

// console.log("start")
// setInterval(function(){
//     console.log("run after 4 secs")
// } , 4000)
// console.log("end")

//rule override -> synchronous ❌ -> js fact (synchronous fact)
//rule override -> asynchronous ✅ -> then how? -> ```BROWSER```

//fact sunlo about browser (web apis -> browser ka part -> asynchronous behaviour)
// console.log() -> browser ✅ , js ❌
// setTimeout()  -> browser ✅ , js ❌
// setInterval() -> browser ✅ , js ❌
// fetch()       -> browser ✅ , js ❌
// timer         -> browser ✅ , js ❌ 
// location      -> browser ✅ , js ❌ 
// localstorage  -> browser ✅ , js ❌ 

// ------------------------------------------

// js waits for nobody

// console.log("start")
// setTimeout(function(){
//     console.log("run after 4 secs")
// } , 4000)
// setTimeout(function(){
//     console.log("run after 2 secs")
// } , 2000)
// console.log("end")

//order of output -> s , e, 2 , 4
//total time taken 4

// --------------------------------------


//interview

// console.log("start")
// setTimeout(function(){
//     console.log("run after 0 secs")
// } , 0)
// console.log("end")

