//once
// setTimeout()
// let id = setTimeout(function(){} , delay)
// clearTimeout(id)

// -----

//repeat
// setInterval
// setInterval(function(){} , repeat_interval)

// let id = setInterval(function(){
//     console.log("hi")
// } , 1000)

// // console.log(id)
// // clearInterval(ID)


// setTimeout(function(){
//     clearInterval(id)
// } , 10000)



// try this all

// -----------------------------------

// fetch -> webapi -> browser ki den -> ek baari mei sara data nhi deti -> returns a promise

// https://api.tvmaze.com/search/shows?q=girls -> api

// //by default GET
// fetch('https://api.tvmaze.com/search/shows?q=girls') //string comp.
// .then(function(data){
//     // console.log(data) //partial data / meta data
//     return data.json() //retunrs a promise -> waits for the entire data + json format aega (xml , json)
// })
// .then(function(resp){
//     console.log(resp)
// })
// .catch(function(err){
//     console.log(err)
// })


// // async-await

// async function dataMango(){
//     let data = await fetch('https://api.tvmaze.com/search/shows?q=girls'); //patial/meta data
//     let resp = await data.json(); //waits for the entire data +  json format of the data
//     console.log(resp);
// }
// dataMango()
