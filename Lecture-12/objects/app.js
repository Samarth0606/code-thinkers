//method ? -> function?

//methods are functions which are declared inside the objects
// Math.ceil() //function ❌ method ✅
// -------

// let obj = {
//     //properties
//     a:10,
//     b:20,
//     //method
//     fn:function(){
//         console.log( 10 )
//     }
// }

// console.log(obj.a)//property no need to run
// obj.fn () // method run krna pdhega
// obj.sam () // ❌ method run krna pdhega




// -------------


let obj = {
    a:10,
    b:20,
    c:function abc(){
        console.log(10)
    }
}
console.log(obj.b) // 20
// console.log(obj.b()) // error
console.log(obj.e) // property -> undef
console.log(obj.e()) //method-> error

// console.log(obj.c) // fn
// console.log(obj.c()) // 