/*----- constants -----*/
const player = {};
const simon = {};
const greenValue = '0';
const redValue = '1';
const yellowValue = '2';
const blueValue = '3';
/*----- app's state variables -----*/
let simonMoves;
let playerMoves = '';
let loseState;
/*----- cached element references -----*/

const howToPlayBtn = document.querySelector('#how-to-play');
const playBtn = document.querySelector('#play');
// elements for each button -> I will hopefully refactor them out later
const greenBtn = document.querySelector('#green');
const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');

/*----- event listeners -----*/

greenBtn.addEventListener('click', greenBtnHandler);
redBtn.addEventListener('click', redBtnHandler);
yellowBtn.addEventListener('click', yellowBtnHandler);
blueBtn.addEventListener('click', blueBtnHandler);

howToPlayBtn.addEventListener('click', howToPlayHandler);
playBtn.addEventListener('click', playHandler);

/*----- functions -----*/

// handelers for each button

//green button blicked
function greenBtnHandler(event) {
	event.target.style.background = `white`;
	// return the button to it's initial state
	setTimeout(greenBtnToStableState, 2000);
	// record which color was clicked in the playerMoves string
	playerMoves = `${playerMoves}0`;
}

function redBtnHandler(event) {
	event.target.style.background = `white`;
	setTimeout(redBtnToStableState, 2000);
	playerMoves = `${playerMoves}1`;
}

function yellowBtnHandler(event) {
	event.target.style.background = `white`;
	setTimeout(yellowBtnToStableState, 2000);
	playerMoves = `${playerMoves}2`;
}

function blueBtnHandler(event) {
	event.target.style.background = `white`;
	setTimeout(blueBtnToStableState, 2000);
	playerMoves = `${playerMoves}3`;
}

// make functions that return the color btn to its initial state
function greenBtnToStableState() {
	greenBtn.style.background = 'green';
}

function redBtnToStableState() {
	redBtn.style.background = 'red';
}
function yellowBtnToStableState() {
	yellowBtn.style.background = 'yellow';
}
function blueBtnToStableState() {
	blueBtn.style.background = 'blue';
}

// function for is the how to play button is clicked
function howToPlayHandler(event) {
	console.log('yo');
}

//function for if the play button is clicked
function playHandler(event) {
	console.log('sup');
}
