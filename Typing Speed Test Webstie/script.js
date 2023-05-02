const setWords = [
    "Mistakenly he hit the cold tap—in January. The shower spat icy venom. Shrieking, he leapt with mongoose agility. One hand  snaked towards the tap and turned rapidly.",
    "Please feel free to quote limited text from this article on condition that an active link to this page is included",
    "What a task I’ve set myself! Fifty words! Now, twenty-six different letters in one sentence—that’s an easy thing to do; the quick brown fox jumps over the lazy dog. But fifty words—no more, no less—that’s not so easy. I can’t do it! I give up! Sorry!"
];

const msg = document.querySelector(".msg");
let typeWords = document.getElementById("mywords");
const button = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
    let random = Math.floor(Math.random() * setWords.length);
    msg.innerText = setWords[random];
    let date = new Date();
    startTime = date.getTime();
    // console.log(startTime);
    button.innerText = "Done";
}



const GameEnd = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let wordStr = typeWords.value;
    let wordCount = WordCounter(wordStr);
    let NetWPM = Math.round((wordCount / totalTime) * 60);
    let finalMsg = `You typed total at ${NetWPM} words per minutes`;
    msg.innerHTML = finalMsg;
};


const WordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
};


button.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.innerText == "Start") {
        typeWords.disabled = false;
        playGame();
    } else if (e.target.innerText == "Done") {
        typeWords.disabled = true;
        button.innerText = "Start";
        GameEnd();
    }
});




