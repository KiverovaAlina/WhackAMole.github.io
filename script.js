const total = 15;
let checkGame = false;

let btnStart = document.querySelector(".start_button");
let scoreLabel = document.querySelector(".score_label");
let holes = document.querySelectorAll(".hole");
let btnRestart = document.querySelector(".restart_button");


btnStart.addEventListener("click", () => {

    let score = 0;
    checkGame = !checkGame;
    btnStart.innerText = "Стоп";

    btnRestart.addEventListener("click", () => {
        score = 0;
        scoreLabel.innerText = "Счетчик: " + score;
    })

    for (let k = 0; k < holes.length; k++){
        holes[k].addEventListener("click", () => {
            if (holes[k].style.backgroundColor === "rgb(108, 74, 131)"){
                score++;
                scoreLabel.innerText = "Счетчик: " + score;
                holes[k].style.backgroundColor = "rgb(208, 176, 230)";
            }
        })
    }

    let timer = setInterval(() => {

        if (checkGame == false) {
            clearInterval(timer);
            btnStart.innerText = "Старт";
            scoreLabel.innerText = "Счетчик: 0";
            checkGame = false;
            return ;
        }

        let i = getRandomIndex();
        
        if (score >= total){
            clearInterval(timer);
            btnStart.innerText = "Старт";
            scoreLabel.innerText = "Счетчик: 0";
            checkGame = false;
            return ;
        }

        holes[i].style.backgroundColor = "rgb(108, 74, 131)";

        setTimeout(() => {
            holes[i].style.backgroundColor = "rgb(208, 176, 230)";
        }, 1000)
        
    }, 1500);
})

function getRandomIndex(){
    return Math.floor(Math.random() * 16);
}

