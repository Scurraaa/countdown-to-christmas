const daysEl = document.getElementsByClassName('days-value')[0];
const hoursEl = document.getElementsByClassName('hours-value')[0];
const minuteEl = document.getElementsByClassName('minute-value')[0];
const secondsEl = document.getElementsByClassName('seconds-value')[0];

const christmas = '25 Dec 2021';


function countdown() {
    const chirstmasDate = new Date(christmas)
    const currentDate = new Date()

    var differenceDate = chirstmasDate - currentDate;

    const totalSeconds = (chirstmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24; 

    const minute = Math.floor(totalSeconds / 3600 / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minuteEl.innerHTML = minute;
    secondsEl.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);