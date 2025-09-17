
// grab elements
const clockEl = document.getElementById('clock');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const themeToggle = document.getElementById('themeToggle');
const timezoneSelect = document.getElementById('timezone');

//sections
const clockSection = document.getElementById('clockSection');
const stopwatchSection = document.getElementById('stopwatchSection');
const timerSection = document.getElementById('timerSection');


// dark/light mode

themeToggle.addEventListener('click' , () => {

  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('bg-white');
  document.body.classList.toggle('text-green-400');
  document.body.classList.toggle('text-black');

});

// clock with timezone


function updateClock() {
  const tz = timezoneSelect.value;
  const now = tz === "local" ? new Date() : new Date(new Date().toLocaleString("en-US", { timeZone: tz }));

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockEl.textContent = `${hours}:${minutes}:${seconds}`;
  ampmEl.textContent = ampm;

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  
  dateEl.textContent = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

setInterval(updateClock, 1000);
updateClock();


//Timer 

let timerInterval, timerTime = 0;

const timerEl = document.getElementById('timer');

const startTimer = document.getElementById('startTimer');

const stopTimer = document.getElementById('stopTimer');

const resetTimer = document.getElementById('resetTimer');

function updateTimerDisplay(){
  const m = String(Math.floor(timerTime / 60)).padStart(2 , '0');
       const s = String(Math.floor(timerTime % 60)).padStart(2 , '0');
       timerEl.textContent = `${m}:${s}`;
}

startTimer.addEventListener('click' , () => {

if(!timerInterval){

  timerTime = parseInt(document.getElementById('timerInput').value) || 0;

  updateTimerDisplay();

  timerInterval = setInterval(() => {

    if(timerTime > 0){
     
       timerTime--;
 updateTimerDisplay();
    }else{
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's Up");
    }
  }, 1000);
}

});

stopTimer.addEventListener('click' , () => {
clearInterval(timerInterval);
timerInterval = null;
});

resetTimer.addEventListener('click' , () => {
clearInterval(timerInterval);
timerInterval = null;
timerTime = 0;
updateTimerDisplay();
document.getElementById('timerInput').value = '';
});

// mode switch (show/hide sections)

const showClock = document.getElementById('showClock');
const showStopwatch = document.getElementById('showStopwatch');
const showTimer = document.getElementById('showTimer');

showClock.addEventListener('click' , () => {
  clockSection.classList.remove('hidden');
  stopwatchSection.classList.add('hidden');
  timerSection.classList.add('hidden');
});

showStopwatch.addEventListener('click' , () => {
  stopwatchSection.classList.remove('hidden');
  clockSection.classList.add('hidden');
  timerSection.classList.add('hidden');
});

showTimer.addEventListener('click' , () => {
  timerSection.classList.remove('hidden');
  clockSection.classList.add('hidden');
  stopwatchSection.classList.add('hidden');
});
