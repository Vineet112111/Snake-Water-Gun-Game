let button = document.querySelector(".button");
button.addEventListener("click", startGame, false);


let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGame, false);


let output = document.querySelector(".output");
let choice = document.querySelector('input[name="choice"]:checked');



function startGame() {
    let choice = document.querySelector('input[name="choice"]:checked');


    let random = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    if (random === 1) computerChoice = "Snake";
    else if (random === 2) computerChoice = "Water";
    else if (random === 3) computerChoice = "Gun";

    let userChoice = choice.value;

    if (userChoice === computerChoice) {
        output.innerHTML = "<p><h2>Match Draw !</h2></p>\
    <p><h4>Your Choice :"+ userChoice+ " </h4></p>\
    <p><h4>Computer Choice :"+computerChoice+" </h4></p>";
    }
    else if((userChoice=="Snake"&&computerChoice=="Water")||(userChoice=="Water"&&computerChoice=="Gun")||(userChoice=="Gun"&&computerChoice=="Snake"))
    {
         output.innerHTML = "<p><h2>You Win !</h2></p>\
    <p><h4>Your Choice :"+ userChoice+ " </h4></p>\
    <p><h4>Computer Choice :"+computerChoice+" </h4></p>";
    }
    else if((computerChoice=="Snake"&&userChoice=="Water")||(computerChoice=="Water"&&userChoice=="Gun")||(computerChoice=="Gun"&&userChoice=="Snake"))
    {
         output.innerHTML = "<p><h2>Computer Win !</h2></p>\
    <p><h4>Your Choice :"+ userChoice+ " </h4></p>\
    <p><h4>Computer Choice :"+computerChoice+" </h4></p>";
    }


    // Disabled button and choice after playing one
    document.querySelectorAll('input[name="choice"]').forEach(ck=>ck.disabled=true);
    button.disabled=true;
}

function resetGame() {
    // Uncheck all radio buttons


    document.querySelectorAll('input[name="choice"]').forEach(ck=>ck.disabled=false);
    button.disabled=false;


    document.querySelector('input[name="choice"]:checked').checked = false;

    output.innerHTML = "<p><h4>New round started. Choose your move!</h4></p>";

   
}
