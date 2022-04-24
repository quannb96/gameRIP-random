let getRandomNumber = function (max) {
    let random;
    if (!isNaN(max)) {
        random = Math.random();
        random = Math.floor(random * max);
        random = random + 1;
    }
    return random;
}

const current = document.getElementById("current").firstChild;
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const myDie = document.getElementById("die");
const myTotal = document.getElementById("total");
const myRoll = document.getElementById("roll");

let changePlayer = function() {
    if (current.nodeValue == player1.value) {
        current.nodeValue = player2.value
    } else {current.nodeValue = player1.value}
    myDie.value = "0";
    myTotal.value = "0";
    myRoll.focus();
}

const btnNewGame = document.getElementById("btnNewGame");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const turn = document.getElementById("turn");

btnNewGame.addEventListener("click", (newGame) => {
    score1.value = "0";
    score2.value = "0";
    if (player1.value == "" || player2.value == "") {
        turn.removeAttribute("class");
        alert("Please enter two player names.")
    } else {
        turn.setAttribute("class", "open");
        changePlayer();
    }
})

const btnRoll = document.getElementById("btnRoll");


btnRoll.addEventListener("click", (MyRoll) => {

     let total = parseInt(myTotal.value);
     let die = getRandomNumber(6);

     if (die == 1) {
        total = 0;
        changePlayer();
     } else {total = total + die;}
     myDie.value = die;
     myTotal.value = total;
 });

const btnHold = document.getElementById("btnHold");

btnHold.addEventListener("click", (myHold) => {

     let score;
     let total = parseInt(myTotal.value);
     if (current.nodeValue == player1.value) {
        score = score1;
     } else {score = score2;}

     score.value = parseInt(score.value) + total;

     if (score.value >= 100) {
        alert(current.nodeValue + " WINS!");
        newGame();
     } else {changePlayer();}
 });