let music = new Audio("./music.mp3");
let MusicTurn = new Audio("./ting.mp3");
let gameover = new Audio("./gameover.mp3");
let info = document.getElementById("info");
let turn = "X";
let isgameover = false;

let ChangeTurn = () => {
    if (turn === "X") {
        turn = "0";
    } else {
        turn = "X";
    }
}

// Function to check for win

let checkwin = () => {
    let boxtext = document.querySelectorAll(".boxtext");
    // console.log(boxtext);
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach((e) => {
        if ((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === "")) {
            info.innerText = `${boxtext[e[0]].innerText} Won`;
            isgameover = true;
        }
    })
}
checkwin();

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
    let textbox = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (textbox.innerText === "") {
            textbox.innerText = turn;
            ChangeTurn();
            MusicTurn.play();
            checkwin();
            if (!isgameover) {
                info.innerHTML = `Turn for ${turn}`;
            }
        }
    });
});



