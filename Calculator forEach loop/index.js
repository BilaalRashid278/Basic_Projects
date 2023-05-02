let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let ac = document.querySelector('.ac');
let string = "";
Array.from(buttons).forEach(button =>{
    button.addEventListener('click', e =>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        } else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            display.value = string;
        }
        else {
            string += e.target.innerHTML;
            display.value = string;
        }
       
    });
});
ac.addEventListener("click",()=>{
    string = "";
    display.value = string;
})