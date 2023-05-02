const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");



let player = { speed: 5 };

startScreen.addEventListener("click", () => {
    gameArea.classList.remove("hide");
    startScreen.classList.add("hide");
    player.start = true;
    window.requestAnimationFrame(gamePlay);
    for (x = 0; x < 5; x++) {
        let roadLine = document.createElement("div");
        roadLine.setAttribute('class', "lines");
        roadLine.style.top = `${x * 150}px`;
        gameArea.appendChild(roadLine);
    }
    let car = document.createElement("div");
    car.setAttribute("class", "car");
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    // console.log(player);
});



let gamePlay = () => {
    // console.log("Hey i am clicked");
    let road = gameArea.getBoundingClientRect();
    // console.log(road);
    let car = document.querySelector(".car");
    if (player.start) {
        moveLines();
        if (keys.ArrowUp && player.y > 0) { player.y -= player.speed }
        if (keys.ArrowDown && player.y < (road.bottom - 70)) { player.y += player.speed }
        if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed }
        if (keys.ArrowRight && player.x < (road.width - 50)) { player.x += player.speed }
        car.style.top = `${player.y}px`
        car.style.left = `${player.x}px`
        window.requestAnimationFrame(gamePlay);
    };
};

function moveLines() {
    document.querySelectorAll(".lines").forEach((item) => {
        item.y += player.speed
        item.style.top = item.y + "px";
    });
}












let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}



document.addEventListener("keydown", (e) => {
    e.preventDefault();
    keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
    e.preventDefault();
    keys[e.key] = false;
});





