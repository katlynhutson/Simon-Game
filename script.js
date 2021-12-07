/*----- constants -----*/
const player = {};
const simon = {};
/*----- app's state variables -----*/
let simonMoves;
let playerMoves;
let loseState;
/*----- cached element references -----*/
const gameBoard = document.querySelector('#game-board');
const howToPlayBtn = document.querySelector('#how-to-play');
const playBtn = document.querySelector('#play');
// elements for each button -> I will hopefully refactor them out later
const greenBtn = document.querySelector('#green');
const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');

/*----- event listeners -----*/
gameBoard.addEventListener('click', colorsHandler);
howToPlayBtn.addEventListener('click', howToPlayHandler);
playBtn.addEventListener('click', playHandler);
/*----- functions -----*/
// handles if a color button is clicked
function colorsHandler(event) {
	if (event.target.id === 'green') {
		// make the button 'toggle'
		event.target.style.color = `black`;
		// return the button to it's initial state
		setTimeout(greenBtnToStableState, 2000);
	}
	if (event.target.id === 'red') {
		event.target.style.color = `white`;
		setTimeout(redBtnToStableState, 2000);
	}
	if (event.target.id === 'yellow') {
		event.target.style.color = `black`;
		setTimeout(yellowBtnToStableState, 2000);
	}
	if (event.target.id === 'blue') {
		event.target.style.color = `white`;
		setTimeout(blueBtnToStableState, 2000);
	}
}

// make a function that return the color btn to its initial state
function greenBtnToStableState() {
	greenBtn.style.color = 'green';
	console.log('yeah green');
}

function redBtnToStableState() {
	redBtn.style.color = 'red';
	console.log('yeah red');
}
function yellowBtnToStableState() {
	yellowBtn.style.color = 'yellow';
	console.log('yeah yellow');
}
function blueBtnToStableState() {
	blueBtn.style.color = 'blue';
	console.log('yeah blue');
}

function howToPlayHandler(event) {
	console.log('yo');
}

function playHandler(event) {
	console.log('sup');
}
