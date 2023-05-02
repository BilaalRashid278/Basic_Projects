let dropdown = document.getElementById("ClickEvent");
let dropdown_2 = document.getElementById("ClickEvent_2");
let link_1 = document.getElementById("link_1");
let link_2 = document.getElementById("link_2");
let block = false;
console.log(dropdown)
dropdown.addEventListener("click", () => {
    block = true;
    console.log("click")
    if (block === true) {
        link_1.classList.toggle("display_block");
    };
});
dropdown_2.addEventListener("click", () => {
    block = true;
    console.log("click")
    if (block === true) {
        link_2.classList.toggle("display_block");
    };
});





