

//event kab? -> jab user user kuch type kar rha ho in the input

// let inpEl = document.querySelector('input');


// inpEl.addEventListener('input' , function(){
//     console.log("input trigger hogya")
// })


// -------------------
// only for inputs
let inpEl = document.querySelector('input');


inpEl.addEventListener('input' , function(event){
    // console.log(event.target)
    console.log(event.target.value) //getter
    event.target.value = "samarth" //setter
})


// ----------

// inp -> type
// <h1>value</h1>

