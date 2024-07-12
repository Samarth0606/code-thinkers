
//closure ❌
// function a(){
//     let b = 100;
//     function b(){
//         console.log(b)
//     }
//     b() //run
// }

// a()

// ----------------
//closure ✅
function a(){
    let b = 100;
    function d(){
        console.log(b)
    }
    return d //return 
}

let out = a()
out()


