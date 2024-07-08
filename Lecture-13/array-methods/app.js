let arr = [10,20,30,40,50];
let arr2 = [100,300,500,700];

// concat
let arr3 = arr.concat(arr2);
console.log(arr3)

//last mei add krna hai
arr2.push(900 , 1100 , 1300);
console.log(arr2)


// first add karna hota to
arr.unshift(0 , 1 , 2 ,3)
console.log(arr)

// ---------------------------
// [0, 1, 2, 3, 10, 20, 30, 40, 50]
// last remove -> single value
// arr.pop()
arr.pop()
console.log(arr)

// start remove -> single value
arr.shift();
console.log(arr)
