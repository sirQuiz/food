function timer(deadLine) {
    let time     = Date.parse(deadLine) - Date.parse(new Date()),
        days     = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours    = Math.floor((time / (1000 * 60 * 60)) % 24),
        minutes  = Math.floor((time / (1000 * 60)) % 60),
        seconds  = Math.floor((time / 1000) % 60);

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setTimerElements(timerSelector, deadLine) {
    let timerWrapper = document.querySelector(timerSelector),
        firstTime = setTimeout(function secondTime() {
            updateClock();
            firstTime = setTimeout(secondTime, 1000);
        }, 1000);


    function updateClock() {
        const t = timer(deadLine);
        timerWrapper.querySelector('#days').textContent = t.days;
        timerWrapper.querySelector('#hours').textContent = t.hours;
        timerWrapper.querySelector('#minutes').textContent = t.minutes;
        timerWrapper.querySelector('#seconds').textContent = t.seconds;

        if(t.total <= 0) {
            clearTimeout(firstTime);
        }
    }
}
setTimerElements('.promotion__timer', '2022-07-26');