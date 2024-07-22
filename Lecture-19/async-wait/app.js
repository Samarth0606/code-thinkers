//when nothing is returned from a fn then by default undefined is returned
// function sam(){

// }

// let output = sam()

// console.log(output) //undefined

// ----------------------

// function sam(){

// }

// let output = new sam() //constructor -> object

// console.log(output) //empty object


// ----------------------

// async function sam(){

//     return 10
// }

// let output = sam() 

// console.log(output) // promise always

// ----------------------


// async function sam(){
//         console.log("1");
//         setTimeout(()=>{
//             console.log("settimeout-1")
//         } , 2000)
//         console.log("2")
// }

// async function sam2(){
//     console.log("1");
//     console.log("2")
// }

// sam()
// sam2()

// -----------------

// async function sam(){
//     console.log("1");
//     let data = await fetch('https://api.tvmaze.com/search/shows?q=girls')
//     console.log(data);
//     console.log("2")
// }

// async function sam2(){
//     console.log("1");
//     console.log("2")
// }

// sam()
// sam2()

// ----------------

// api calling
// fetch and axios




