
console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");
console.log(secondsParagraphs);
let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");
console.log(minutesParagraphs);
let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");
console.log(hoursParagraphs);

document.getElementById("start").addEventListener('click', myStartFunction);

document.getElementById("stop").addEventListener('click', myStopFunction);

document.getElementById("reset").addEventListener('click', myResetFunction);

document.getElementById("save").addEventListener('click', mySaveFunction);
    //console.log('The time is:', `${hours}:${minutes}:${seconds}`);

var myVar;
function myStartFunction() {
    
    myVar=setInterval(function() {
        renderDigits(seconds, secondsParagraphs);
        renderDigits(minutes, minutesParagraphs);
        renderDigits(hours, hoursParagraphs);

        seconds++;

        if (seconds === 60 ) {
            seconds = 0;
            minutes ++;     
        }

        if (minutes ===60) {        
            minutes = 0;
            hours++
        }

        if (hours === 24) {
            hours = 0;
        }
    
    }, 1);
    
}
  

function myStopFunction () {
    clearInterval(myVar);
}

function myResetFunction () {
    clearInterval(myVar);
    seconds = 0;
    minutes = 0;
    hours = 0;
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);
}



function mySaveFunction() {
    clearInterval(myVar);
    
    const mySavedTime = document.createElement("div");
    const firstDigitHours = document.createElement("p");
    const secondDigitHours = document.createElement("p");
    const twoPoints = document.createElement("p");
    const firstDigitMinutes = document.createElement("p");
    const secondDigitMinutes = document.createElement("p");
    const twoPointsSec = document.createElement("p");
    const firstDigitSeconds = document.createElement("p");
    const secondDigitSeconds = document.createElement("p");

    document.body.appendChild(mySavedTime);
    mySavedTime.classList.add('digital-clock');

    mySavedTime.appendChild(firstDigitHours);
    mySavedTime.appendChild(secondDigitHours);   
    mySavedTime.appendChild(twoPoints); 
    mySavedTime.appendChild(firstDigitMinutes);
    mySavedTime.appendChild(secondDigitMinutes); 
    mySavedTime.appendChild(twoPointsSec); 
    mySavedTime.appendChild(firstDigitSeconds);
    mySavedTime.appendChild(secondDigitSeconds); 

    firstDigitHours.innerText = hoursParagraphs[0].innerText;
    secondDigitHours.innerText = hoursParagraphs[1].innerText;
    twoPoints.innerText = ":";
    firstDigitMinutes.innerText = minutesParagraphs[0].innerText;
    secondDigitMinutes.innerText = minutesParagraphs[1].innerText;
    twoPointsSec.innerText = ":";
    firstDigitSeconds.innerText = secondsParagraphs[0].innerText;
    secondDigitSeconds.innerText = secondsParagraphs[1].innerText;

    
}

function renderDigits (nr, pList) {
    const stringDigits = nr + "";
    const digitList = stringDigits.split("");

    if(digitList.length === 2) {
        pList[0].innerText = digitList[0];
        pList[1].innerText = digitList[1];
    } else {
        pList[0].innerText = 0;
        pList[1].innerText = digitList[0];
    }
}