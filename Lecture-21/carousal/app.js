let imgEl = document.querySelector('img');

let arr = [
    'https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' , 
    'https://images.unsplash.com/photo-1721655799196-7c50607778a9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8' , 
    'https://plus.unsplash.com/premium_photo-1721446379149-d8aef573bae9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D' ,
    'https://images.unsplash.com/photo-1721613884660-14099d377f02?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
]

//repeeat 2s
let num = 0;
let id = setInterval(function(){
    imgEl.setAttribute('src' , arr[num]);
    num = (num + 1) % arr.length;
} , 2000)


// destroy 30s
setTimeout(function(){
    clearInterval(id)
} , 30000)

