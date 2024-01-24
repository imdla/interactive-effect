moment.locale('ko');
let targetDate = moment('1/1/2025');
let days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

document.querySelector('.card-title span').innerText = targetDate.format('LLLL');


setInterval(() => {
    let now = moment();
    let timeLeft = moment.duration(targetDate.diff(now));
    // console.log(timeLeft._data.seconds);
    updateClock(timeLeft);

}, 1000);

function updateClock(time) {
    seconds.innerText = numberFormat(time._data.seconds);
    minutes.innerText = numberFormat(time._data.minutes);
    hours.innerText = numberFormat(time._data.hours);
    days.innerText = numberFormat(time._data.days);
}

function numberFormat(num) {
    let covertedNum = num;
    if (num < 10) {
        covertedNum = `0${num}`;
    }
    return covertedNum;
}