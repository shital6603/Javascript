const max = prompt("Enter maximum number :")

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number :");



while (true) {
    if (guess == "quit") {
        console.log("User has quitted !!!!");
        break;
    }
    if (guess == random) {
        console.log("Congratulations !!! You have guessed right number !!");
        break;
    }
    else {
        console.log("Wrong answer ! Try again ");
    }
}