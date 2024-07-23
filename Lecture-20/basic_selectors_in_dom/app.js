// 1. getElementsByTagName
let selectedEl = document.getElementsByTagName('h1');
console.log(selectedEl);



// 2. getElementById
let selectedEl2 = document.getElementById('sam');
console.log(selectedEl2);




// 3. getElementsByClassNAME
let selectedEl3 = document.getElementsByClassName('sammy');
console.log(selectedEl3);



// 4. QUERYSELECTOR (selects the first occurance)

document.querySelector('h1') //tag,class,id
document.querySelector('.sammy') //tag,class,id
document.querySelector('#sam') //tag,class,id


// 5. QUERYSELECTORALL (selects all the occurances)
document.querySelectorAll('h1') //tag,class,id
document.querySelectorAll('.sammy') //tag,class,id
document.querySelectorAll('#sam')