var pOneName = prompt("Enter First player Name");
var pTwoName = prompt("Enter Seconed Player name");

var playerOne = Math.floor(( Math.random() * 6 ) + 1 );
var palyerTwo =  Math.floor(( Math.random() * 6 ) + 1 );

function whoWins() {
	if ( palyerTwo >  playerOne ) {
		document.querySelector("h1").innerHTML = pTwoName + " Wins!";
	}

	else if ( playerOne > palyerTwo ) {
	    document.querySelector("h1").innerHTML = pOneName + " Wins!";	
	}

	else {
	    document.querySelector("h1").innerHTML = "Tied! Refresh Again!";
	}
}

document.querySelector("#one").innerHTML = pOneName;
document.querySelector("#two").innerHTML = pTwoName;



function showDice1(result) {
	if ( result === 1 ) {
		document.querySelector(".img1").setAttribute("src", "images/dice1.png");
	}

	else if ( result === 2 ) {
		document.querySelector(".img1").setAttribute("src", "images/dice2.png");
	}
	else if ( result === 3 ) {
		document.querySelector(".img1").setAttribute("src", "images/dice3.png");
	}
	else if ( result === 4 ) {
		document.querySelector(".img1").setAttribute("src", "images/dice4.png");
	}
	else if ( result === 5 ) {
		document.querySelector(".img1").setAttribute("src", "images/dice5.png");
	}
	else if ( result === 6 ) {
		document.querySelector(".img1").setAttribute("src", "images/dice6.png");
	}
	}

function showDice2(result) {
	if ( result === 1 ) {
		document.querySelector(".img2").setAttribute("src", "images/dice1.png");
	}

	else if ( result === 2 ) {
		document.querySelector(".img2").setAttribute("src", "images/dice2.png");
	}
	else if ( result === 3 ) {
		document.querySelector(".img2").setAttribute("src", "images/dice3.png");
	}
	else if ( result === 4 ) {
		document.querySelector(".img2").setAttribute("src", "images/dice4.png");
	}
	else if ( result === 5 ) {
		document.querySelector(".img2").setAttribute("src", "images/dice5.png");
	}
	else if ( result === 6 ) {
		document.querySelector(".img2").setAttribute("src", "images/dice6.png");
	}
	}

whoWins();
showDice1(playerOne);
showDice2(palyerTwo);