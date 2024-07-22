


// let promise1 = new Promise((resolve , reject)=>{

// })

// ----------------

// let promise1 = new Promise((resolve , reject)=>{
//     //resolve.reject (value)
//     let data = "10 rupee";
//     let error = "nhi dera";
//     // resolve(data); //.then
//     // reject(error); //.catch
// })

// // console.log(promise1)
// promise1
// .then((d)=>{
//     console.log(d)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("mai aakhri hu")
// })

// ----------------


// let promise1 = new Promise((resolve , reject)=>{
//     let data = "10 rupee";
//     let error = "nhi dera";
//     // resolve(data); 
//     reject(error); 
// })

// // console.log(promise1)
// promise1
// .then((err)=>{
//     console.log(err)
// })
// .catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{ //any 1 of them
//     console.log("mai aakhri hu")
// })

// ---------------

// instagram
// photo select -> 4s
// filter -> 2s
// caption -> 3s
// upload -> 4s


// ---------------


function step1(){
    return new Promise((resolve,reject)=>{
        console.log("plzz wait i am selecting image...")
        setTimeout(()=>{
            resolve('selected image')
        } , 4000)
    })
}
function step2(image){
    return new Promise((resolve,reject)=>{
        console.log(`plzz wait i am applying filter on ${image}...`)
        setTimeout(()=>{
            resolve('filter applied')
        } , 2000)
    })
}
function step3(filter){
    return new Promise((resolve,reject)=>{
        console.log(`plzz wait i am adding caption on image with ${filter}...`)
        setTimeout(()=>{
            resolve('added caption')
        } , 3000)
    })
}
function step4(caption){
    return new Promise((resolve,reject)=>{
        console.log(`plzz wait i am uploading image with ${caption}...`)
        setTimeout(()=>{
            resolve('image uploaded')
        } , 5000)
    })
}

step1()
.then(function(image){
    console.log(image);
    return step2(image) //to prevent horizontal growth
})
.then(function(filter){
    console.log(filter);
    return step3(filter)
})
.then(function(caption){
    console.log(caption)
    return step4(caption)
})
.then((upload)=>{
    console.log(upload)
})
.catch((err)=>{
    console.log(err)
})
