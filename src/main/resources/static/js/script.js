let time = new Date();
let periodPerSecond = (time.getSeconds() + 1) * 6;
const clockHandSecond = document.querySelector(".clock-hand.seconds");
let periodPerMinute = time.getMinutes() * 6  + time.getSeconds() / 60 * 6;
const clockHandMinutes = document.querySelector(".clock-hand.minutes");
let periodPerHour;
if (time.getHours > 12) {
    periodPerHour = (time.getHours() - 12 + time.getMinutes() / 60) * 30;
} else periodPerHour = (time.getHours() + time.getMinutes() / 60) * 30;
const clockHandHours = document.querySelector(".clock-hand.hours");
const clockShieldHandle = document.querySelector("#clock-shield");
const clockDigitalHandle = document.querySelector("#clock-whole");

function rotateSecondHand() {
    periodPerSecond += 6;
    clockHandSecond.style.transform = rotate(periodPerSecond);
    clockHandSecond.style.transition = transition();
}

function rotateMinuteHand() {
    periodPerMinute += 6 / 60;
    clockHandMinutes.style.transform = rotate(periodPerMinute);
    clockHandMinutes.style.transition = transition();
}

function rotateHourHand() {
    periodPerHour += 30 / 3600;
    clockHandHours.style.transform = rotate(periodPerHour);
    clockHandHours.style.transition = transition();
}

function transition() {
    return "all 1s";
}

function rotate(rotatePeriod) {
    return "rotate(" + rotatePeriod + "deg)";
}

window.onload = function() {
    setInterval(function() {

        time = new Date();
        
        let day = time.getDate();
        let month = time.getMonth() + 1;
        let year = time.getFullYear();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        if(day < 10) day = "0" + day;
        if(month < 10) month = "0" + month;
        if(hours < 10) hours = "0" + hours;
        if(minutes < 10) minutes = "0" + minutes;
        if(seconds < 10) seconds = "0" + seconds % 360;

        document.getElementById("clock-digital").innerHTML 
        = day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds;

        rotateSecondHand();
        rotateMinuteHand();
        rotateHourHand();

    }, 1000);
}