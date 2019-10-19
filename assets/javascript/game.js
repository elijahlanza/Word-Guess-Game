var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses_left = 9;
var guesses = [];
var random_index;
var between_games = false;


var wins_div = document.getElementById("wins");
var losses_div = document.getElementById("losses");
var guesses_div = document.getElementById("guesses");
var guesses_left_div = document.getElementById("guesses_left");
var status_div = document.getElementById("status");


function choose_the_right() {
    var rand = Math.floor(Math.random() * 26);
    return rand;
}

function update_page() {

    wins_div.innerHTML = wins;
    losses_div.innerHTML = losses;
    guesses_div.innerHTML = guesses;
    guesses_left_div.innerHTML = guesses_left;

}

function new_game() {
    guesses_left = 9;
    guesses = [];

}

update_page();
status_div.innerHTML = "start guessing letters";
random_index = choose_the_right();
console.log(alphabet[random_index]);

document.onkeyup = function (event) {
    console.log("button press: " + event.key);
    var user_letter = event.key.toLowerCase();

    if (between_games === true) {
        new_game();
        status_div.innerHTML = "start guessing letters";
        random_index = choose_the_right();
        console.log(alphabet[random_index]);
        between_games = false;
        return;
    }

    if (!alphabet.includes(user_letter)) {
        status_div.innerHTML = "that is not a letter genius!";
        return;

    }

    if (guesses.includes(user_letter)) {
        status_div.innerHTML = "Yo! You already guessed that letter";
        return;

    }


    guesses.push(user_letter);
    update_page();

    if (user_letter === alphabet[random_index]) {

        wins++;
        status_div.innerHTML = "I am a onion cutting ninja. Type any key to play again"
        between_games = true;


    }
    else {
        guesses_left--;
        status_div.innerHTML = "wrong guess!"

        if (guesses_left <= 0) {
            losses++;
            status_div.innerHTML = "You lost BAHAHAHAHAHAHAHA!!!!Type any key to play again"
            between_games = true;
        }


    }
    update_page();




















};