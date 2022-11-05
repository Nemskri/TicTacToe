let bgMusic = new Audio("./assets/music.mp3");
let turnMusic = new Audio("./assets/ting.mp3");
let gameOver = new Audio("./assets/gameover.mp3");
let victory = false;

let turn = "X";
//Change turn rom X-0-X
let changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//Func to Win//
const checkWin = () => {
    let boxText = document.getElementsByClassName('xo')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON"
            victory = true;
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
        }
    })

}

//Game Logic//
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.xo');
    element.addEventListener('click', () => {
        bgMusic.play();
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!victory) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})
// RESET //
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.xo');
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    victory = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px";
    gameOver.play();
    bgMusic.pause();
    bgMusic.currentTime = 0.0;

})