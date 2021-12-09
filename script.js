/*----- constants -----*/
const player = {};
const simon = {};
const greenValue = '0';
const redValue = '1';
const yellowValue = '2';
const blueValue = '3';
/*----- app's state variables -----*/
let simonMoves;
let simonArray = [];
let playerMoves;
let loseState;
let roundCount = 0;
let flashingSimonColors = true;
/*----- cached element references -----*/

const howToPlayBtn = document.querySelector('#how-to-play');
const playBtn = document.querySelector('#play');
// elements for each button -> I will hopefully refactor them out later
const greenBtn = document.querySelector('#green');
const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');
const h2 = document.querySelector('h2');
const numColors = document.querySelector('#number-colors');
const time = document.querySelector('#time');

/*----- event listeners -----*/

greenBtn.addEventListener('click', greenBtnHandler);
redBtn.addEventListener('click', redBtnHandler);
yellowBtn.addEventListener('click', yellowBtnHandler);
blueBtn.addEventListener('click', blueBtnHandler);

howToPlayBtn.addEventListener('click', howToPlayHandler);
playBtn.addEventListener('click', playHandler);

/*----- functions -----*/

// handelers for each button

//green button clicked
function greenBtnHandler() {
	greenBtnFlash();
	// record which color was clicked in the playerMoves string -----> THIS IDEA CAME FROM a one-on-one with Esin where she advised me to use a string rather than an array or an object to store the player choices

	playerMoves = `${playerMoves}0`;
}

function redBtnHandler() {
	redBtnFlash();
	playerMoves = `${playerMoves}1`;
}

function yellowBtnHandler() {
	yellowBtnFlash();
	playerMoves = `${playerMoves}2`;
}

function blueBtnHandler() {
	blueBtnFlash();
	playerMoves = `${playerMoves}3`;
}

// make functions that return the color btn to its initial state
function greenBtnFlash() {
	greenBtn.style.background = `white`;
	setTimeout(function () {
		greenBtn.style.background = 'green';
	}, 500);
}

function redBtnFlash() {
	redBtn.style.background = `white`;
	setTimeout(function () {
		redBtn.style.background = 'red';
	}, 500);
}
function yellowBtnFlash() {
	yellowBtn.style.background = `white`;
	setTimeout(function () {
		yellowBtn.style.background = 'yellow';
	}, 500);
}
function blueBtnFlash() {
	blueBtn.style.background = `white`;
	setTimeout(function () {
		blueBtn.style.background = 'blue';
	}, 500);
}

// function for is the how to play button is clicked
function howToPlayHandler(event) {
	console.log('yo');
}

//function for if the play button is clicked
function playHandler() {
	clearBeforeRound();
	roundCount += 1;
	h2.innerText = `Round: ${roundCount}`;
	numColors.innerText = `${roundCount + 1} colors`;
	time.innerText = `Ready? Set?`;
	setTimeout(simonPicks, 2000);

	setTimeout(enableBtns, (roundCount + 1) * 2000);
	// find a better way to do this later
	setTimeout(compareMoves, (roundCount + 1) * 4 * 1000);
}

function enableBtns() {
	console.log('hi');
	greenBtn.disabled = false;
	redBtn.disabled = false;
	yellowBtn.disabled = false;
	blueBtn.disabled = false;
	time.innerText = 'GO!';
}

function compareMoves() {
	if (playerMoves === simonMoves) {
		alert('what do you want? a cookie?');
		playBtn.disabled = false;
	} else {
		youLose();
		console.log('wrong answer');
	}
}

function youLose() {
	alert(`looks like ya messed up somewhere ${playerMoves}`);
	refreshPage();
}

function refreshPage() {
	location.reload();
}

function simonPicks() {
	for (let i = 0; i < roundCount + 1; i++)
		simonMoves = `${simonMoves}${Math.floor(Math.random() * 4)}`;
	simonArray = simonMoves.split('');
	console.log(simonArray);
	flashSimonColors();
}

// function to randomize computer choices
// function randomSimonMoves() {
// 	for (let i = 0; i < roundCount + 1; i++)
// 		simonMoves = `${simonMoves}${Math.floor(Math.random() * 4)}`;
// }

function clearBeforeRound() {
	playerMoves = '';
	simonMoves = '';
	simonArray = [];
	playBtn.disabled = true;
	flashingSimonColors = true;
	greenBtn.disabled = true;
	redBtn.disabled = true;
	yellowBtn.disabled = true;
	blueBtn.disabled = true;
}

// ---> THIS IDEA CAME FROM https://stackoverflow.com/questions/9729695/is-there-a-way-to-check-if-a-function-is-currently-running-in-jquery/9729728 to make a state variable for a flashing function.
function flashSimonColors() {
	for (let i = 0; i < simonArray.length; i++) {
		delay(i);
	}
}

//delay the flash between simon choices so the order can be detected ---> THIS IDEA CAME FROM https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30 and https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/44476626 I mostly used these resources for syntax debugging and structure inspiration.
function delay(i) {
	setTimeout(() => {
		if (simonArray[i] === `0`) {
			greenBtnFlash();
			console.log(`green`);
		} else if (simonArray[i] === `1`) {
			redBtnFlash();
			console.log(`red`);
		} else if (simonArray[i] === `2`) {
			yellowBtnFlash();
			console.log(`yellow`);
		} else if (simonArray[i] === `3`) {
			blueBtnFlash();
			console.log(`blue`);
		}
	}, i * 1000);
}
