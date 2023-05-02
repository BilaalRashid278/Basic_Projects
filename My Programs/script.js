// let str = "bilaal rashid is a good man ";
// let change = () => {
//     str = str.split(" ");
//     let arr = str;
//     arr.forEach((e) => {
//         if (e.length < 6) {
//             console.log(e);
//         }
//     });
// }
// change();


// _______________________________________________ 

const write_txt = document.getElementById("write-txt");
const btn = document.querySelector(".btn");
const search = document.querySelector("#search");
let show_txt = document.getElementById("show-txt");

btn.addEventListener("click", () => {
    let changedInArray = write_txt.value.split(" ");
    changedInArray.forEach(e => {
        if (e.length > search.value) {
            show_txt.value = e;
            console.log(e);
        }

    })
});

