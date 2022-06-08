let date = new Date(new Date().setTime(0));
let time = date.getTime();
let seconds = Math.floor((time % (100 * 60)) / 1000);
let minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

let timex= 0;
let mtime=setInterval(function() {
    if(seconds < 59) {
        seconds++;
    }
    else {
        seconds= 0;
        minute++;
    }
    let fsec = seconds < 10? `0${seconds}` : `${seconds}`;
    let fmin = minute < 10? `0${minute}` : `${minute}`;
    document.querySelector(".time").innerHTML= `${fmin} : ${fsec}`;

}, 1000)
