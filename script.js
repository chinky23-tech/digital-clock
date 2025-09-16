
const clock = document.getElementById('clock');

// Function to get current time and show it
function updateClock() {
  const now = new Date(); // current date & time

  // Extract hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format: add leading zero if < 10 (like 09:05:03)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Put formatted time inside our div
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateClock every 1 second (1000 ms)
setInterval(updateClock, 1000);

// Run once immediately so we don’t wait 1 second
updateClock();
