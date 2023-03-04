const startbtn = document.querySelector('.startBtn');
const maintStartBtn = document.querySelector('.maintStartBtn');

const lapResetBtn = document.querySelector('.lapResetBtn');
const mainLapBtn = document.querySelector('.mainLapBtn');

const laps = document.querySelector('.laps');

let milisec = 0;
let sec = 0;
let min = 0;

let m = 0;
let s = 0;
let ms = 0;

let time = document.querySelector('.time');
let int = null;

let isTimeStarted = false;

let allLaps = [];
let lapsNumber = 1;

startbtn.addEventListener('click', () => {
  if(isTimeStarted === false) {
  int = setInterval(displayTimer, 10);
  } else {
    clearInterval(int);
  }
  changeStartBtn();
  checkIsResetAvailable();
})

function displayTimer(){
  milisec++;

  if(milisec >=99) {
    sec++;
    milisec = 0;
  }
  if(sec >=60) {
    min++;
    sec = 0;
  }

  m = min < 10 ? "0" + min : min;
  s = sec < 10 ? "0" + sec : sec;
  ms = milisec < 10 ? "0" + milisec : milisec;

time.innerHTML = `${m}:${s},${ms}`;
}

function changeStartBtn() {
  if(isTimeStarted === false) {
    isTimeStarted = true;

    startbtn.innerHTML = "Stop";
    startbtn.classList.add("timerStarted");
    maintStartBtn.classList.add("timerStartedMain")
  } else {
    isTimeStarted = false;  
    startbtn.innerHTML = "Start";
    startbtn.classList.remove("timerStarted");
    maintStartBtn.classList.remove("timerStartedMain")
  }

}

function checkIsResetAvailable() {
  if(isTimeStarted === false) {
    lapResetBtn.innerHTML = "Reset";
  } else {
    lapResetBtn.innerHTML = "Lap"
  }
} 

function displayLaps() {
  lapsNumber++;
  laps.innerHTML = ""
  if(allLaps.length > 0) {
    allLaps.map(item => {
      laps.innerHTML += 
      `<div class="lap">
      <span> Lap ${item.number} </span>
      <span> ${item.time} </span>
      </div>`
    })
  }
}

lapResetBtn.addEventListener('click', () => {
  if (isTimeStarted === false) {
    clearInterval(int);
    m = 0;
    s = 0;
    ms = 0;
    
    milisec = 0;
    sec = 0;
    time.innerHTML = "00:00,00";
    
    allLaps= [];
    laps.innerHTML = "";
    lapsNumber = 1;

  } else {
    allLaps.push(
      {
        time: m + ':' + s + "," + ms,
        number:  lapsNumber,
      }
      )
      
      displayLaps();
      console.log(allLaps);
    }
  })
  
