const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();
//current year at background
year.innerText = currentYear + 1;
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diffInSeconds = newYearTime - currentTime;

  const d = Math.floor(diffInSeconds / 1000 / 60 / 60 / 24);
  const h = Math.floor((diffInSeconds / 1000 / 60 / 60) % 24);
  const m = Math.floor((diffInSeconds / 1000 / 60) % 60);
  const s = Math.floor(diffInSeconds / 1000) % 60;

  //Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

//To remove the spinner and display the countdown after 1sec
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

//Run every second
setInterval(updateCountdown, 1000);
