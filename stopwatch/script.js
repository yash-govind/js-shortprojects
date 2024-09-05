let timeTaken = 0;
let startTime = 0;
let currentTime;
let timeInterval = 0;
let hrs, mins, secs;
hrs = 0;
mins = 0;
secs = 0;
//Date.now() calculates time based on miliseconds since 1970s. lets say x time for now.

function startTimer() {
  startTime = Date.now() - timeTaken;
  timeInterval = setInterval(() => {
    currentTime = Date.now();
    timeTaken = currentTime - startTime;
    displayTime(timeTaken);
  }, 10);
}

//explain this function .

function stopTimer() {
  clearInterval(timeInterval);
}

function resetTimer() {
  clearInterval(timeInterval);
  timeTaken = 0;
  displayTime(timeTaken);
}

function displayTime(time) {
    var milliseconds = Math.floor((time % 1000) / 10);
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / 1000 / 60 / 60) % 24); //literally dk wth this is .
  
    var displayTime = hours.toString().padStart(2, '0') + ':' +
                      minutes.toString().padStart(2, '0') + ':' +
                      seconds.toString().padStart(2, '0') + '.' +
                      milliseconds.toString().padStart(2, '0');
  
    document.querySelector('.display-time').textContent = displayTime;
   
}
const startBtn = document
  .querySelector(".start")
  .addEventListener("click", startTimer);
const pauseBtn = document
  .querySelector(".pause")
  .addEventListener("click", stopTimer);
const resetBtn = document
  .querySelector(".reset")
  .addEventListener("click", resetTimer);

//00:00:00 --> 00:00:30

//  functions --> display() , start(), stop() , reset()
