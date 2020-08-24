// const exampleTime = "00:23:11.000";

export const timeToSec = (time) => {
    const hours = parseInt(time.substring(0, 2))
    const minutes = parseInt(time.substring(3, 5))
    const seconds = parseInt(time.substring(6, 8))
    return seconds + minutes * 60 + hours * 3600;
}

export const secToTime = (sec) => {
    let secondsLeft = sec;
    const hours = Math.floor(sec / 3600)
    secondsLeft -= hours * 3600;
    const minutes = Math.floor(secondsLeft / 60)
    secondsLeft -= minutes * 60;
    const seconds = secondsLeft;
    console.log(hours, minutes, seconds)
    return `${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}:000`
}

export const nowSec = () => {
    const now = new Date();
    return now.getSeconds() + (60 * now.getMinutes()) + (60 * 60 * now.getHours());
}


function pad2(num) {
    var s = num + "";
    while (s.length < 2) s = "0" + s;
    return s;
}