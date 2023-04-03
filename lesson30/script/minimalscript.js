"use strict"

let num = 0.1 + 0.2; /* 0.3 */ 

console.log('Вийшло ' + num.toFixed(1));

let line ='1';

let number = 2;

console.log('Вийшло ' + (Number(line) + number)); /* 3 */


const fileSizeMb = '820 Мб';

const usdSizeGb = prompt('Введіть обсяг флешки у Гб');

let usdSizeMb = parseInt(usdSizeGb) * 1024 ;

let totalNumOffiles = usdSizeMb / parseInt(fileSizeMb);

alert('кількість можливих файлів розміром 820 МБ на флешці: '  + Math.round(totalNumOffiles));









