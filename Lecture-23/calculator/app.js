

let buttons = document.querySelectorAll('button');
let inpEl = document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click' , function(e){
        let btnText = e.target.innerText;

        if(btnText === 'C'){
            inpEl.value = ''
        }
        else if(btnText === '='){
            try{

                inpEl.value = eval(inpEl.value)
            }
            catch(err){
                inpEl.value = "pagal hai kya"
            }
        }
        else{
            inpEl.value+=btnText
        }
    })
}










