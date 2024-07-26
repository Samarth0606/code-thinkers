let h1 = document.querySelector('h1')
// console.log(h1.innerText)//getter
// console.log(h1.innerHTML)//getter

// //setter
// h1.innerHTML = "lolipop"
// h1.innerText = "doreamon"


// ----------------------

// console.log(h1.parentElement)
// console.log(h1.parentElement.parentElement.innerHTML)
// console.log(h1.parentElement.parentElement.children[0].innerHTML)


// console.log(h1.nextElementSibling.nextElementSibling.previousElementSibling.innerHTML)


// ------------------------
//creating a new element

let p = document.createElement('p');
let p2 = document.createElement('p');

p.innerText = 'i am para from dom'
p2.innerHTML = 'i am para from dom'

// single Element
h1.parentElement.appendChild(p) //last
// multiple element
h1.parentElement.append(p , p2) //last
h1.parentElement.prepend(p , p2) //start

// directly gayab
h1.remove()

// console.log(h1.parentElement)

h1.parentElement.removeChild(h1)