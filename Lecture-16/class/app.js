
// class Person{

// }

// // ---------------------

// class Person{
//     constructor(){      //fn

//     }
// }


// ---------------------

// class Person{
//     constructor(){      

//     }
// }

// let p1 = new Person();
// let p2 = new Person();


// // ---------------------

// class Person{
//     constructor(naam , mail , shadi){      
//         this.name = naam;
//         this.email = mail;
//         this.isMarried = shadi;
//     }
// }

// let p1 = new Person('sam','sam@gmail.com',true);
// let p2 = new Person('mav','mav@gmail.com',false);
// console.log(p1,p2)


// ---------------------

// class Person{
//     constructor(naam , mail , shadi){      
//         this.name = naam;
//         this.email = mail;
//         this.isMarried = shadi;
//     }

//     khaoPiyo(){
//         console.log(`hello from ${this.name}`)
//     }
// }

// let p1 = new Person('sam','sam@gmail.com',true);
// let p2 = new Person('mav','mav@gmail.com',false);
// console.log(p1,p2)
// console.log(p1.khaoPiyo(),p2.khaoPiyo())

// ---------------------

//scenario -> class banani hai jo exact same kaam kregi -> student
// class Student extends Person{}

// let s1 = new Student('sam','sam@gmail.com',true);
// console.log(s1)

// ---------------------

//not wrong , but it is not optimised (best way)
// class student{
//     constructor(naam , mail , shadi){      
//         this.name = naam;
//         this.email = mail;
//         this.isMarried = shadi;
//     }

//     khaoPiyo(){
//         console.log(`hello from ${this.name}`)
//     }
// }

// ---------------------

//inheritance
class Person{
    constructor(naam , mail , shadi){      
        this.name = naam;
        this.email = mail;
        this.isMarried = shadi;
    }
    khaoPiyo(){
        console.log(`hello from ${this.name}`)
    }
}

class Student extends Person{
    //name , email , ismarried , rollno
    constructor(naam , mail , shadi,rollno){
        super(naam , mail , shadi); //class extend -> uska constructor call hohjata hai
        this.roll = rollno;
    }
    aishKaro(){
        console.log(`bye from ${this.name}`)
    }
    khaoPiyo(){
        console.log(`tata from ${this.name}`)
    }

}
let s1 = new Student('sam','sam@gmail.com',true,13);
console.log(s1, s1.aishKaro() , s1.khaoPiyo()) //kaunsa? -> child vala













