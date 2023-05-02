const hjoke = document.querySelector("#joke");
const btn = document.querySelector(".button");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let api = () => {
    fetch(url).then(res => res.json()).then((data) => {
        hjoke.textContent = data.joke;
    });
}
btn.addEventListener('click', api);
api();


// _________________________________________________________________________________________
