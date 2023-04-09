"use strict"

const numb = +prompt("Введіть число ");

const numBer = +prompt("Введіть число ");

function derivedNumber (numb,numBer) {
    if (numb < numBer) {
        console.log('-1');
    } else if (numb > numBer) {
        console.log('1');
    } else if (numb === numBer) {
        console.log('0');
    } else {
        console.log('Ви ввели невірні дані ');
    }
}
derivedNumber(numb, numBer)


const num = prompt("Введіть число");

const number = prompt("Введіть число");

const numeral = prompt("Введіть число");

function convertNumbers(num, number, numeral) {
    return  num + number + numeral;
}
console.log('Число', convertNumbers(num, number, numeral));


// const first = prompt('ведіть число'); 
// const second = prompt('ведіть число');
// через prompt пуста cтрока стає '0' , а не 'undefined' 

function areaQuadrilateral(first, second) {
    console.log(first, second);
    if (first === undefined && second) {
        return second * second;
    } else if (second === undefined && first) {
        return first * first;
    } else if (first === undefined && second === undefined) {
        return alert('Введіть число');
    } else {
        return first * second;
    }
}
console.log( areaQuadrilateral(5,6));





