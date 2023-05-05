"use strict"
const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = 60000;
const MS_PER_HOUR = 3600000;
  
let date = new Date();
console.log(date);

let transfereedSeconds = +prompt('Вкажіть секунди');
let transfereedMinutes = +prompt('Вкажіть хвилини');
let transfereedHours = +prompt('Вкажіть години');

changeDAte(transfereedSeconds,"SECONDS");
changeDAte(transfereedMinutes,"MINUTES");
changeDAte(transfereedHours,"HOURS")

function changeDAte(time,dateType) {
    const msCount = getMilliseconds(dateType);
    const changedDAte = date.getTime() + time * msCount;
    date = new Date (changedDAte);
    console.log(date);
}

function getMilliseconds(dateType) {
    switch(dateType) {
        case "SECONDS":
            return MS_PER_SECOND;
        break;
        case "MINUTES":
            return MS_PER_MINUTE;
        break;    
        case "HOURS":   
            return  MS_PER_HOUR;
        break;
    }
}
