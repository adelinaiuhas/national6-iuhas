// variant one

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


setInterval(function() {
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
   
}, 1000);

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




// variant two  -- not ok
/*
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


setInterval(function() {
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);

    seconds++;

    if(seconds===59) {
        seconds=0;
        minutes++;
        renderDigits(minutes,minutesParagraphs);
    }
    if(minutes===59) {
        minutes=0;
        renderDigits(minutes,minutesParagraphs);
        hours++;
        renderDigits(hours,hoursParagraphs);
    }
    if(hours===24) {
        hours=0;
        renderDigits(hours,hoursParagraphs);
    }

   
}, 1000);

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
*/



// variant three
/*
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


setInterval(function() {
    const secondsString = seconds + "";
    const secondsStringArray = secondsString.split("");
    console.log(secondsStringArray);

    if(secondsStringArray.length === 2) {
        secondsParagraphs[0].innerText = secondsStringArray[0];
        secondsParagraphs[1].innerText = secondsStringArray[1];
    } else {
        secondsParagraphs[0].innerText = 0;
        secondsParagraphs[1].innerText = secondsStringArray[0];
    }
    
    if(seconds === 59) {
        seconds = 0;
    } else {
        seconds++;
    }

    const minutesString = minutes + "";
    const minutesStringArray = minutesString.split("");
    console.log(minutesStringArray);

    if(minutesStringArray.length === 2) {
        minutesParagraphs[0].innerText = minutesStringArray[0];
        minutesParagraphs[1].innerText = minutesStringArray[1];
    } else {
        minutesParagraphs[0].innerText = 0;
        minutesParagraphs[1].innerText = minutesStringArray[0];
    }
  
        
    if(minutes === 59) {
        minutes = 0;
    } else if (seconds === 00) {
        minutes++;
    }

    const hoursString = hours + "";
    const hoursStringArray = hoursString.split("");
    console.log(hoursStringArray);

    if(hoursStringArray.length === 2) {
        hoursParagraphs[0].innerText = hoursStringArray[0];
        hoursParagraphs[1].innerText = hoursStringArray[1];
    } else {
        hoursParagraphs[0].innerText = 0;
        hoursParagraphs[1].innerText = hoursStringArray[0];
    }
       
    if(hours === 24) {
        hours = 0;
    } else if (minutes === 59) {
        hours++;
    }
}, 1000);    
*/  