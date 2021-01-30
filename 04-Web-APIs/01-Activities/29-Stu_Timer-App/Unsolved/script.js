var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
//additonal variables
let isRun = false
let workSDur = 1500;
let currentLeft = 1500;
let brkSDurr = 300;


var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

function startTimer() {
  // Write code to start the timer here
}

playButton.addEventListener("click", startTimer);

//pause
//**//pauseButton.addEventListener("click", () => {

//**// */})


