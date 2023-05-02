// let flag = 0;

// function plus(x){
//     flag = flag + x;
//     slideshow(flag);
// }
// slideshow(flag);
// function slideshow(num){
//     let slides = document.querySelectorAll(".slide");
//     if(num == slides.length){
//         flag = 0;
//         num  = 0;
//     } else if(num < 0){
//         flag = slides.length-1;
//         num = slides.length-1;
//     }
//     for(value of slides){
//         value.style.display = "none";
//     }
//     slides[num].style.display = "block";
//     console.log(num);
    
// }

// ________________ Repeat Logic ________________________
let flag = 0;

function plus(x){
    flag = flag + x;
    show(flag);
}

function show(num){
    let slides = document.querySelectorAll('.slide');
    console.log(slides);
    for(value of slides){
        value.style.display = "none";
    }
    if(num == slides.length){
        num = 0;
        flag = 0;
    } else if(num < 0){
        num = slides.length-1;
        flag = slides.length-1;
    }
    slides[num].style.display = "block";
    
}

show(flag);


