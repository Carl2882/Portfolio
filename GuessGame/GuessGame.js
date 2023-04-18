let input = document.getElementById("guess");
let newGame = document.getElementById("newgame");
let submit = document.getElementById("submit");
let displayarea = document.getElementById("output");
let hint = document.getElementById("hintdisplay");
let history = document.getElementById("game-history");

var tries = 0;
var wins = 0;
var losses = 0;


document.getElementById("submit").disabled = true;
document.getElementById("guess").disabled = true;
document.getElementById("newgame").disabled = false;

let ranNum = Math.floor(Math.random() * 99) + 1;
    console.log(ranNum);

newGame.addEventListener("click", function () {  
    input.value = ""
    displayarea.innerHTML = ""
    history.innerHTML = ""
    document.getElementById("submit").disabled = false;
    document.getElementById("guess").disabled = false;
    document.getElementById("newgame").disabled = true;
    tries = 0;
    ranNum
    let num = input.value;
    if (ranNum % 2 == 0){
        hint.innerHTML = "number is even";
    } else{
    hint.innerHTML = "number is odd"
    }
  })

submit.addEventListener("click", function () {
    document.getElementById("submit").disabled = false;
    document.getElementById("guess").disabled = false;
    document.getElementById('newgame').disabled = true;
    disabled = true;
     num = input.value;
    if (num > 100 || num < 0 || num === "") {
    hint.innerHTML = "Number should be between 1-100";}
    else if (num > ranNum) {
    hint.innerHTML = "Number is less than guess";
    tries++;
  } else if (num < ranNum) {
    hint.innerHTML = "Number is greater than guess";
    tries++;
        if(tries < 2){
          history.innerHTML = "Tries : 1."}
          else if(tries < 3){
            history.innerHTML = "Tries : 2."}
          else if(tries = 3 ){
          hint.innerHTML = "";
          displayarea.innerHTML = "You lost. Start over";
          history.innerHTML = "Tries : 3.";
          document.getElementById("guess").disabled = true;
          document.getElementById("submit").disabled = true;
          document.getElementById("newgame").disabled = false;
          }
  } else {
        if(tries < 2){
          history.innerHTML = "Tries : 1."}
          else if(tries < 3){
            history.innerHTML = "Tries : 2."}
          else if(tries = 3 ){
            history.innerHTML = "Tries : 3."}
    hint.innerHTML = "WIN:You guessed right!";
    displayarea.innerHTML = "WINNER"; 
    document.getElementById("submit").disabled = true;
    document.getElementById("newgame").disabled = false;
    document.getElementById("guess").disabled = true;
  }
  input.value = ""
})


// }else if(tries = 2){
//   history.innerHTML = "Tries:2"
// }