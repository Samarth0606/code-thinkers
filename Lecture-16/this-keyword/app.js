

//this -> reference to obj ❌

//  5 types: 
// 1. regular function invocation
// 2. method invocation
// 3. constructor func invocation
// 4. indirect invocation
// 5. arrow function invocation

// ----------------------------------------------------
// ``` this depends on how it is being called upon ```
// ----------------------------------------------------

// 1. regular function invocation => window

// function abc(){
//     console.log(this); //chal kaise rha hai?-> windows
// }
// abc(); //regular fn calling

// ---------------------

// 2. method invocation => object in which the method is defined
// let obj = {
//     a:10,
//     fn:function(){
//         console.log(this); //chal kaise rha hai?-> obj
//     }
// }

// obj.fn(); //dependant on object -> method invocation

// ---------------------

// let obj = {
//     a:20,
//     b: function(){
//         console.log(this) //ye kaise?
//     }
// }

// let bro = obj.b
// bro(); //regular -> window

// ---------------------

// let obj = {
//     s: 20,
//     fn: function(){
//         console.log(this) //obj
//         function b(){
//             console.log(this) //window
//         }
//         b()
//     }
// }

// obj.fn()

// let bro = obj.fn
// bro();

// ---------------------

// 3. constructor func invocation => newly created object

// function Sam(naam , umar){
//     this.name = naam;
//     this.age = umar;
// }

// let s1 = new Sam('sam' , 10)
// let s2 = new Sam('mav' , 2)

// --------------------

//5. arrow function invocation


// function sum(a,b){
//     return a+b;
// }

// let ans = sum(10,20);
// console.log(ans);

// ----------
// function sum(a,b){
//     return a+b;
// }
    
//type-1
// let summ = (a,b)=>{
//     return a+b;
// }
// let ans = sum(10,20);
// console.log(ans);

// ---------

//type-2
// let sum = (a,b)=> a+b;

// let ans = sum(10,20);
// console.log(ans);

// -----------

// let sqr2 = (a)=>{ //1 (anyday)
//     return a*a;
// }

// let sqr1 = (a)=> a*a; //2 (single statement return)

// let sqr = a => a*a; //3 (1 argument)

// console.log(sqr(5))

// ---------------
//this in arrow => parent ka this
// let obj = {
//     a:10,
//     fn: ()=>{
//         console.log(this);
//     }
// }

// obj.fn() // window (arrow fn)


// // -----------

// let obj2 = {
//     a:10,
//     fn: ()=>{
//         console.log(this); //window
//         let b = ()=>{
//             console.log(this); //window
//         }
//         b()
//     }
// }

// obj2.fn()


// -----------

// let obj2 = {
//     a:10,
//     fn: function(){
//         console.log(this); // obj2
//         let b = ()=>{
//             console.log(this); //obj2
//         }
//         b()
//     }
// }

// obj2.fn()

// ------------------------

// 4. indirect invocation (call , apply , bind)
//this ke reference ko badal dete hai -> this point change krdete hai

let obj2 = {
    a:50
}
let obj1 = {
    a:10,
    fn: function(b,c,d){
        console.log(`hello from ${this.a} , ${b} , ${c} , ${d}`)
    }
}

// obj1.fn() //hello from 10

//call -> argument accept krega -> array nahi hoga (b,c,d => comma seperateed values)
obj1.fn.call(obj2,10,20,30) //argument -> this ko jispr point krvana hai

//apply -> argument accept krega -> array hoga([b,c,d])
obj1.fn.apply(obj2,[10,20,30]) //argument -> this ko jispr point krvana hai

// ------------------

// bind => this reference change krta hai and copy create krdeta hai of that function
let newfn = obj1.fn.bind(obj2,1,2,3) //copy , not invoke

console.log(newfn)
newfn()





