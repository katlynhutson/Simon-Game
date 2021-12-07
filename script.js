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
/*----- event listeners -----*/
gameBoard.addEventListener('click', colorsHandler);
howToPlayBtn.addEventListener('click', howToPlayHandler);
playBtn.addEventListener('click', playHandler);
/*----- functions -----*/
function colorsHandler(event) {
	console.log('hi');
}

function howToPlayHandler(event) {
	console.log('yo');
}

function playHandler(event) {
	console.log('sup');
}
