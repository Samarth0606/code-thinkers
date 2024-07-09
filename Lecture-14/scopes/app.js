


// var a = 10;
// function sam(){
//     console.log(a);
// }
// sam();
// console.log(a)


// ---------------

//global / script => block ke andar nhi hai

// var a = 10; // global
// let b = 100; //script
// const c = 1000; //script



// //swarg -> functional /  block 
// function sam(){
//     var c = 1; //functional
//     let d = 2; //block
//     const e = 3; //block
// }
// sam()


// --------------

// var -> global , function

// let a = 1; //script
// var b = 10; //global
// const c = 11; //script

// if(true){
//     var d = 10; //global
//     let e = 11; //block
//     const f = 12; //block
// }


//{} //block scope ,function{} //functional scope


// ----------------


// var a = 10; //20 change
// console.log(a); // 1 -> 10

// function b(){
//     console.log(a) //3 -> 10 
//     a = 20;
//     console.log(a) //4 -> 20
// }

// console.log(a);  // 2 -> 10
// b()
// console.log(a); //5 -> 20

// ----------------

//draw the gec diagram -> after 2 mins ill ask
// var a = 10; //global
// console.log(a); // 1 -> 10

// function b(){
//     console.log(a) //3 -> undefined
//     var a = 20; //func
//     console.log(a) //4 -> 20
// }

// console.log(a);  // 2 -> 10
// b()
// console.log(a); //5 -> 10

// ------------------

// var a = 10; //global
// console.log(a); // 1 -> 10

// if(true){
//     console.log(a) //2 -> 10
//     var a = 20; //global
//     console.log(a) //3 -> 20
// }

// console.log(a);  // 4 -> 20

// ----------------

// let a = 10; //script
// console.log(a); // 1 -> 10

// if(true){
//     console.log(a) //2 -> error
//     let a = 20; //block
//     console.log(a) //3 -> ❌
// }

// console.log(a);  // 4 -> ❌
