

xonst = SongsLength = document.querySelectorAll(".song").length;



let a = new Audio("./songs/a.mp3");
let b = new Audio("./songs/b.mp3");
let c = new Audio("./songs/c.mp3");
let d = new Audio("./songs/d.mp3");
let e = new Audio("./songs/e.mp3");
let f = new Audio("./songs/f.mp3");
let g = new Audio("./songs/g.mp3");
let h = new Audio("./songs/h.mp3");
let i = new Audio("./songs/i.mp3");


for (let i = 0; i < SongsLength; i++) {

    // pause Songs Code
    let play = document.querySelectorAll(".song")[i].addEventListener("click", PlaySong);

    let pause = document.querySelectorAll(".song")[i].addEventListener("dblclick", PauseSong);

    // console.log(song);
    // Pause Song Code
};

function PlaySong() {
    let text = this.innerHTML;
    switch (text) {
        case "a": a.play();
            break;
        case "b": b.play();
            break;
        case "c": c.play();
            break;
        case "d": d.play();
            break;
        case "e": e.play();
            break;
        case "f": f.play();
            break;
        case "g": g.play();
            break;
        case "h": h.play();
            break;
        case "i": i.play();
            break;
    }

};

function PauseSong() {
    let text = this.innerHTML;
    switch (text) {
        case "a": a.pause();
            break;
        case "b": b.pause();
            break;
        case "c": c.pause();
            break;
        case "d": d.pause();
            break;
        case "e": e.pause();
            break;
        case "f": f.pause();
            break;
        case "g": g.pause();
            break;
        case "h": h.pause();
            break;
        case "i": i.pause();
            break;
    }
    // alert("activated Now");
};



