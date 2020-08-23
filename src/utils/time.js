// const exampleTime = "00:23:11.000";

export const timeToSec = (time) => {
    const hours = parseInt(time.substring(0, 2))
    const minutes = parseInt(time.substring(3, 5))
    const seconds = parseInt(time.substring(6, 8))
    return seconds + minutes * 60 + hours * 3600;
}

export const secToTime = (sec) => {
    let secondsLeft = sec;
    const hours = Math.round(sec / 3600)
    secondsLeft -= hours * 3600;
    const minutes = Math.round(sec / 60)
    secondsLeft -= minutes * 60;
    const seconds = secondsLeft;

    return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}:000`
}

function pad2(num) {
    var s = num + "";
    while (s.length < 2) s = "0" + s;
    return s;
}