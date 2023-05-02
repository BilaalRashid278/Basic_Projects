let audioElement = new Audio("./songs/3.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressbar");
let pause = document.createElement("img");
pause.setAttribute("src", "./Group 4.png");
let paused = document.createElement("img");
paused.setAttribute("src", "./Group 4.png");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let played = document.createElement("img");
played.setAttribute("src", "./play-circle-fill.svg");

let play_group = document.getElementsByClassName("play-group");
let changedArray = Array.from(play_group);

let songs = [
    { songName: "Song no 1", filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg" },
    { songName: "Song no 2", filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg" },
    { songName: "Song no 3", filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg" },
    { songName: "Song no 4", filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg" },
    { songName: "Song no 5", filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg" },
    { songName: "Song no 6", filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg" },
    { songName: "Song no 7", filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg" },
    { songName: "Song no 8", filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg" },
    { songName: "Song no 9", filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg" },
    { songName: "Song no 10", filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg" },
];
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.replaceWith(pause);
        pause.classList.add("changeWidth");
        gif.style.opacity = 1;
    }
});
pause.addEventListener("click", () => {
    if (audioElement.play || audioElement.currentTime > 0) {
        audioElement.pause();
        pause.replaceWith(masterPlay);
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressbar.value = progress;
});
myProgressbar.addEventListener("change", () => {
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    changedArray.forEach((element) => {
        console.log(element);
        paused.classList.add("paused");
    });
}

changedArray.forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();

        paused.classList.add("paused");
    });
});










