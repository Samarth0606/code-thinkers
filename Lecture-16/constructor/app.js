// function sam(){

// }
// console.log(sam()) //undef

// --------------------

// function sam(){

// }
// console.log(new sam()) //{}

// ---------------------

//convention not compulsion (capital letter)
// function Sam(){

// }
// console.log(new sam()) //{}


// ---------------------


// function Sam(){
//     this.naam = 'sam';
//     this.age = 20;
// }
// console.log(new Sam()) 

// ---------------------

// function Sam(){
//     this.naam = 'sam';
//     this.age = 20;
//     this.fn = function(){
//         console.log(`hello from ${this.naam}`)
//     }
// }
// console.log(new Sam()) 
// console.log(new Sam()) 

// ---------------------

//prototype => function faikdo

function Sam(){
    this.naam = 'sam';
    this.age = 20;
    // this.fn = function(){
    //     console.log(`hello from ${this.naam}`)
    // }
}

Sam.prototype.fn = function(){
    console.log(`hello from ${this.naam}`)
}

console.log(new Sam()) 
console.log(new Sam().fn()) 