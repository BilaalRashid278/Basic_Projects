let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let arr = Array.from(buttons);
let string = "";
for(value of arr){
    value.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        } else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
            display.value = string;
        } else{
            string += e.target.innerHTML;
            display.value = string;
        };
      
    });
};
document.querySelector('.ac').addEventListener('click',()=>{
    string = "";
    display.value = string;
})
