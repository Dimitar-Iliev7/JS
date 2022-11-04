let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 to 6

let randomDiceImage = "dice" + randomNumber1 + ".png"; //dice 1 to dice 6

let randomImageSrc = randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player1 Wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩Player2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "🏳Draw!";
}