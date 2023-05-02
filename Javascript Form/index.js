let username = document.getElementById('username');
let password = document.getElementById("password");
let error = document.querySelector('.text');
let button = document.querySelector('.main-btn');
console.log(button)

function submited(){
    if(username.value == "" && password.value == ""){
        error.innerHTML = "username or password is empty";
       
    }else if(username.value == ""){
        error.innerHTML = "username is empty";
        
    }else if(password.value == ""){
        error.innerHTML = "password is empty";
        
    }else if(username.value !== "bilaalrashid5566@gmail.com" || password.value !== "#bi56la56al56"){
        error.innerHTML = "incorrect username or password please try again";
       
    }
}