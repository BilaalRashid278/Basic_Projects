const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
const btn_2 = document.querySelector("button");
let play = false;
let newWords = "";
let randWords = "";
let sWords = [
    "html", "css", "javscript", "reactjs", "reactNative",
    "Rust", "Go", "Java", "C#", "C++", "Kotlin", "android",
    "sql", "php", "Nodejs", "Expressjs", "MongoDB"
];
const createNewWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempsWords = sWords[ranNum];
    // console.log(sWords[ranNum].split(""));
    return newTempsWords;
}
btn.addEventListener("click", () => {
    if (play == false) {
        play = true;
        guess.classList.toggle("hidden");
        // play = true;
        btn.innerHTML = "Guess";
    } else {
        let tempWord = guess.value;
        if (tempWord === guess.value) {
            guess.value = "";
            msg.innerHTML = `${newWords} is Correct`;
            play = false;
        }
    }
});



const ScrambleWords = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn_2.addEventListener("click", () => {
    newWords = createNewWords();
    // console.log(newWords);
    randWords = ScrambleWords(newWords.split(""));
    // console.log(randWords.join(""));
    let joined = randWords.join("");
    msg.innerHTML = joined;
});








