let hrs, mins, secs;
hrs = 0;
secs = 0;
mins = 0;
let isRunning = false;
let timeInterval = 0; // to check the time interval if watch is running every 1 secs.

//function to start the watch.


function Startwatch() {
  if (!isRunning) {
    timeInterval = setInterval(() => {
      secs++;
      if (secs === 60) {
        secs = 0;
        mins++;
      }
      if (mins === 60) {
        secs = 0;
        hrs++;
        mins = 0;
      }
      displayWatch();
    }, 1000);
    isRunning =true;
   
}
}

//function to stop the watch

function stopStopWatch(){
  if(isRunning){
    clearInterval(timeInterval);
    isRunning =false;
  }
}

//function to reset the watch

function ResetStopWatch() {
  clearInterval(timeInterval);
  timeInterval = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  displayWatch();
}


//function to display the watch.
function displayWatch() {
  let displayTime =
    String(hrs).padStart(2, "0") +
    " : " +
    String(mins).padStart(2, "0") +
    " : " +
    String(secs).padStart(2, "0");
    
  document.querySelector(".display-time").innerHTML = displayTime;
}


document.querySelector(".start").addEventListener("click", Startwatch);
document.querySelector(".stop").addEventListener("click",stopStopWatch)
document.querySelector(".reset").addEventListener("click", ResetStopWatch);
