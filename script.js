/*----- constants -----*/

//STRETCH - refactor this code so there are some constants

/*----- app's state variables -----*/

// declare player and simon strings and arrays as empty to avoid undefined problem
let simonMoves = '';
let simonArray = [];
let playerMoves = '';
let playerArray = [];

// set the opening level to 0 before play button has ever been clicked
let levelCount = 0;

/*----- cached element references -----*/

// pluck the buttons out of the html
const howToPlayBtn = document.querySelector('#how-to-play');
const playBtn = document.querySelector('#play');
const greenBtn = document.querySelector('#green');
const redBtn = document.querySelector('#red');
const yellowBtn = document.querySelector('#yellow');
const blueBtn = document.querySelector('#blue');

// pluck the headings out of the html
const levelText = document.querySelector('#level');
const playerTurn = document.querySelector('#player-turn');
const anotherLevel = document.querySelector('#another-level');

/*----- event listeners -----*/

// listen to the color buttons
//STRETCH just listen to the gameboard
greenBtn.addEventListener('click', greenBtnHandler);
redBtn.addEventListener('click', redBtnHandler);
yellowBtn.addEventListener('click', yellowBtnHandler);
blueBtn.addEventListener('click', blueBtnHandler);

//listen to the how to play button
howToPlayBtn.addEventListener('click', howToPlayHandler);

//listen to the play button
playBtn.addEventListener('click', playHandler);

/*----- functions -----*/

//STRETCH combine color btn event handlers into one function using an event listener for the gameboard

//green button clicked
function greenBtnHandler() {
	//flash the green button
	greenBtnFlash();
	// record which color was clicked in the playerMoves string -----> THIS IDEA CAME FROM a one-on-one with Esin where she advised me to use a string rather than an array or an object to store the player choices
	playerMoves = `${playerMoves}0`;
	//split the string into an array to access the length of the string and compare the strings contained to the simon choices
	let playerArray = playerMoves.split('');

	//-----> THIS IDEA CAME FROM a one on one with zoe in which she advised me to call compare moves from my color button event listeners rather than my play button event listener to eliminate my timing issue
	//if the amount of colors simon just indicated is equal to the amount of moves the player has made ...
	if (levelCount === playerArray.length) {
		//compare the player moves to the simon moves BUT set it on a one second delay so the user still sees the animation on the last button color they clicked
		setTimeout(compareMoves, 1000);
	}
}

//repeat this logic for the other 3 color buttons - wet

function redBtnHandler() {
	redBtnFlash();
	playerMoves = `${playerMoves}1`;
	playerArray = playerMoves.split('');

	if (levelCount === playerArray.length) {
		setTimeout(compareMoves, 1000);
	}
}

function yellowBtnHandler() {
	yellowBtnFlash();
	playerMoves = `${playerMoves}2`;
	playerArray = playerMoves.split('');

	if (levelCount === playerArray.length) {
		setTimeout(compareMoves, 1000);
	}
}

function blueBtnHandler() {
	blueBtnFlash();
	playerMoves = `${playerMoves}3`;
	let playerArray = playerMoves.split('');

	if (levelCount === playerArray.length) {
		setTimeout(compareMoves, 1000);
	}
}

// make functions that flash the button to a white color than returns them to their initial state
// STRETCH make one function that will do this for all the color buttons

function greenBtnFlash() {
	//change the background of the button to white
	greenBtn.style.background = `white`;
	//change the button back to it's original color, but set it on a half second delay so that the flash is able to be percieved by the user.
	setTimeout(function () {
		greenBtn.style.background = 'green';
	}, 500);
}

//repeat this logic for the other 3 color buttons - wet

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

//make a function that will compare the simon moves to the player moves
function compareMoves() {
	//if the player moves string is identical to the simon moves string ...
	if (playerMoves === simonMoves) {
		//tell the user that they got the answer right
		playerTurn.innerText = 'CORRECT';
		// visually prompt the user to hit the play button to begin the next level
		anotherLevel.innerText = 'NEXT LEVEL?';
		// enable the play button to be clicked so the user can start the next level
		playBtn.disabled = false;
		//disable the button colors because the user shouldn't be making any more choices and they won't actually effect the game.
		disableColorBtns();
		//if the player moves and simon moves are not identical ...
	} else {
		//run the youLose function
		youLose();
	}
}

// lose state function
function youLose() {
	//alert the user that they lost
	playerTurn.style.color = 'red';
	playerTurn.innerText = 'INCORRECT';
	//STRETCH make this whole thing a modal
	//refresh the page after 3 seconds so the game starts over
	setTimeout(refreshPage, 3000);
}

// make the refresh page function ---> I found this documentation on W3schools
function refreshPage() {
	location.reload();
}

//function for if the play button is clicked
function playHandler() {
	// set up the level
	setUpLevel();
	//pick the random simon colors, then flash them in succession after a purposeful short delay after the headings loading
	setTimeout(simonPicks, 1000);
	// enable the color btns to be clicked by the user AFTER the simon buttons have been indicated using setTimeout and an estimate for how long it should take simon to display their answer based on the amount of colors being displayed.
	setTimeout(enableBtns, (levelCount + 1) * 1000);
}

//---> THIS IDEA CAME FROM https://stackoverflow.com/questions/11719961/javascript-remove-disabled-attribute-from-html-input

//function to disable all of the color buttons from clicks (nothing happens when you click them)
function disableColorBtns() {
	greenBtn.disabled = true;
	redBtn.disabled = true;
	yellowBtn.disabled = true;
	blueBtn.disabled = true;
}

//function to set up the current level
function setUpLevel() {
	//increment the level count by one
	levelCount += 1;
	//disable the play button until it's time to start the next level
	playBtn.disabled = true;
	//change the level number being displayed to the current level
	levelText.innerText = `LEVEL: ${levelCount}`;
	// empty out the player moves string and the simonMoves string
	anotherLevel.innerText = '';
	// change the visual to reflect that the user shouldn't click the color buttons and they are disabled
	//they're 'waiting' for the next round to start and for simon to take their turn
	playerTurn.innerText = "SIMON'S TURN";
	playerMoves = '';
	simonMoves = '';
}

//make a function that allows simon to pick an appropriate number of random colors (out of the four color options)
function simonPicks() {
	//pick one more color than the level number
	for (let i = 0; i < levelCount; i++) {
		//use math.floor of math.random times 4 to pick a number between 0 and 4
		//concatonate this value onto the existing simonmoves string
		simonMoves = `${simonMoves}${Math.floor(Math.random() * 4)}`;
	}
	//exit the loop and convert your string into an array of string characters
	simonArray = simonMoves.split('');
	//flash the appropriate colors
	flashSimonColors();
}

// make a function that will loop through the simonArray that will flash a simon color based on the value contained in each indicie of the simonArray
function flashSimonColors() {
	//loops through the entire simonArray
	for (let i = 0; i < simonArray.length; i++) {
		//calls the function that will indicate the color based on the value contained in its indicie - must carry index as argument to do this
		flashOneSimonColor(i);
	}
}

//delay the flash between simon choices so the order can be detected ---> THIS IDEA CAME FROM https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30 and https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop/44476626 I mostly used these resources for syntax debugging and structure inspiration.

//declare flash a single simon color function
function flashOneSimonColor(i) {
	//delay the time between each simon color choice being flashed by...
	setTimeout(() => {
		//if the character in the simonArray index is a 0...
		if (simonArray[i] === `0`) {
			//make the greeen button flash
			greenBtnFlash();
			//repeat this logic for the next 3 colors
		} else if (simonArray[i] === `1`) {
			redBtnFlash();
		} else if (simonArray[i] === `2`) {
			yellowBtnFlash();
		} else if (simonArray[i] === `3`) {
			blueBtnFlash();
		}
		//using the index to methodically increase the time based on value position
	}, i * 1000);
}

//---> THIS IDEA CAME FROM https://stackoverflow.com/questions/11719961/javascript-remove-disabled-attribute-from-html-input

//make the color buttons work again
function enableBtns() {
	greenBtn.disabled = false;
	redBtn.disabled = false;
	yellowBtn.disabled = false;
	blueBtn.disabled = false;
	//indicate that the color buttons are enabled and the player should input their answers
	playerTurn.innerText = 'YOUR TURN';
}

// function for when the how to play button is clicked
function howToPlayHandler() {
	alert(
		"HOW TO PLAY SIMON: Simon is a memory-based game in which 'Simon' presses colors in a particular order, then the player presses those same colors in the same order. If the player succeeds at mimicking Simon, they may proceed into the next level where Simon will press one more color than the last level. If the player makes a mistake, they are forced to restart the game. To start the game, press play. Wait for Simon to take their turn. When it is your turn, click the color buttons in the same order they were clicked by Simon. If you chose correctly, press play to start the next level. If you chose incorrectly, the game will indicate 'INCORRECT' in red, and the page will be auto-refreshed after 3 seconds. This browser-based game is harkening back to the 80's handheld Hasboro game with the same/similar functionality!"
	);
}
