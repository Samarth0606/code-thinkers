// when you pass a function A as an argument to someother function B then B is your HOF

//when you return a fn C from another funtion D then D is knwon as HOF

//--------------HOF---------------

//1st def
// function A(){
//     console.log("i am A")
// }
// function B(fn){ //HOF
//     console.log("i am B")
//     fn();
// }

// B(A); //argument

// ---------------------------

// 2nd def
// function C(){ //hof
//     console.log('i am C')
//     function D(){
//         console.log('i am D')
//     }
//     return D;
// }



//--------------CB (CALLBACK FUNCTION)---------------


// function A(){ 
//     console.log("i am A")
// }

// function B(fn){ //HOF
//     console.log("i am B")
// }

// B(A); 

// ---2 ❌---

// function A(){ 
//     console.log("i am A")
// }

// function B(fn){ //HOF
//     console.log("i am B");
//     console.log(fn) //call ❌ -> cb fn ❌
// }

// B(A); 

// ---3 ✅---

function A(){ //CB
    console.log("i am A")
}

function B(fn){ //HOF
    console.log("i am B");
    fn() //call -> cb ✅ , callback fn ✅
}

B(A); 


