let min = 00;
let sec = 00;
let ms = 00;
let newMin = document.getElementById('min');
let newSec = document.getElementById('sec');
let newMs = document.getElementById('ms');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let Interval;


start.addEventListener('click', ()=> {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});
pause.addEventListener('click', ()=> {
    clearInterval(Interval);
});
reset.addEventListener('click', ()=> {
    clearInterval(Interval);
    ms = "00";
    sec = "00";
    min = "00";
    newSec.innerHTML = sec + "sec";
    newMs.innerHTML = ms + "ms";
    newMin.innerHTML = min + "min";
});


function startTime(){
    ms++;
    if(ms <= 9){
        newMs.innerHTML = "0" + ms + "ms";
    }
    if(ms > 9){
        newMs.innerHTML = ms + "ms";
    }
    if(ms > 99){
        sec++;
        newSec.innerHTML = "0" + sec + "sec";
        ms = 0;
        newMs.innerHTML = "0" + ms + "ms";
    }
    if(sec > 9){
        newSec.innerHTML = sec + "sec";
    }
    if(sec > 59){
        min++;
        newMin.innerHTML = "0" + min + "min";
        sec = 0;
        newSec.innerHTML = "0" + sec + "min";
    }
    if(min > 9){
        newMin.innerHTML = min + "min";
    }
}