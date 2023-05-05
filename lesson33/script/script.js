"use strict"
const avtoInfo = document.getElementById('avto-info');
const car = {
    producer: 'Ford',
    model: 'Focus',
    graduationYear: '2011',
    averageSpeed: '90', 
    Tank: '70',
    Сonsumption: '8',
    drivers:[],
};
console.log(car);

const btnDriver = document.getElementById('add-driver');
btnDriver.addEventListener('click', () => {
    const user = prompt("Добавте ім'я водія");
    driver(user);
})

const user = prompt("Добавте ім'я водія");

const driver = user => {
    car.drivers.push(user);
}
driver(user);

console.log('car', car);

function avtoDro () {
    avtoInfo.innerHTML = `<table>
    <tbody>
        <tr>
            <td>Producer:</td>
            <td>${car.producer}</td>
        </tr>
        <tr>
            <td>Model:</td>
            <td>${car.model}</td>
        </tr>
        <tr>
            <td>GraduationYear:</td>
            <td>${car.graduationYear}</td>
        </tr>
        <tr>
           <td>AverageSpeed:</td>
           <td>${car.averageSpeed}</td>
        </tr>
        <tr>
           <td>Tank:</td>
           <td>${car.Tank}</td>
        </tr>
        <tr>
           <td>Сonsumption:</td>
           <td>${car.Сonsumption}</td>
        </tr>
        <tr>
           <td>Drivers:</td>
           <td>${car.drivers}</td>
        </tr>
    </tbody>
    </table>`;
}
avtoDro ()




