

// let formEl = document.querySelector('form');
// formEl.addEventListener('submit' , function(){
//     console.log("form submitted")
// })


//form -> submit -> refresh hojana

// ----------
// let formEl = document.querySelector('form');
// formEl.addEventListener('submit' , function(e){
//     e.preventDefault(); //refresh ❌
//     console.log("form submitted")
// })


// ----------------

// note taker 

// input -> 
// btn-> press

// ul
// li>jhjhjh
// li>samarth
// -----
// remove -> li click -> remove
// ---------------------
let inpEl = document.querySelector('#title')
let btnEl = document.querySelector('#add-btn')
let listEl = document.querySelector('#list')


btnEl.addEventListener('click' , function(){
    let li = document.createElement('li');
    li.innerText = inpEl.value;
    listEl.appendChild(li);
    inpEl.value = ""

    li.addEventListener('click' , function(){
        li.remove()
    })
})






