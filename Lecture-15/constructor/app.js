
//nothing -> undef
// function abc(){

// }
// console.log(abc())

// ------------------

//constructor fn -> obj return 
// function Abc(){

// }
// console.log(new Abc())

//convention -> good pract -> constructor capital letter (not compulsion)

// ---------------------

//this => newly created object

// function Abc(){
//     this.name = "sam";
//     this.age = 90;
// }

// let obj1 = new Abc()
// console.log(obj1)

// let obj2 = new Abc()
// console.log(obj2)

// // -----------

// function Abc(naam , umar){
//     this.name = naam;
//     this.age = umar;
// }

// let obj1 = new Abc('sam' , 45)
// console.log(obj1)

// let obj2 = new Abc('maverick' , 2)
// console.log(obj2)

// -----------

function Abc(naam , umar){
    this.name = naam;
    this.age = umar;
    // this.greet = function(){
    //     console.log(`hello from ${this.name}`)
    // }
}

Abc.prototype.greet = this.greet = function(){
    console.log(`hello from ${this.name}`)
}

let obj1 = new Abc('sam' , 45)
console.log(obj1)
obj1.greet();

let obj2 = new Abc('maverick' , 2)
console.log(obj2)
obj2.greet();


//pause ---> prototype
