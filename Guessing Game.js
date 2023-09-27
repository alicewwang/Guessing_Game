let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) { //not a number is false
    maximum = parseInt(prompt("Please enter a valid number"));
}
// we use wile because it can check many times, if can only check one time
// Math.floor(Math.random()*10)+1, this gives you random num 1-10
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your guess (Type 'q' to quit)");
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempt++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempt++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or quit");
    }
}
if (guess === 'q') {
    console.log("OK, you quit.");
} else {
    console.log(`You got it! It took you ${attempt} guesses`);
}
