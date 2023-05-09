"use strick"
const main = document.getElementById("main");
const listProducts = [
    {
        productName: "apple",
        amount: 8,
        bought: true,
        priceProduct: 3,
        // sum: amount * priceProduct,
        sum: 24,


    },
    {
        productName: "chery",
        amount: 5,
        bought: false,
        priceProduct: 4,
        // sum: amount * priceProduct,
        sum: 20,

    },
    {
        productName: "banana",
        amount: 6,
        bought: true,
        priceProduct: 5,
        // sum: amount * priceProduct,
        sum: 30,

    },
    {
        productName: "tangerine",
        amount: 8,
        bought: false,
        priceProduct: 4,
        // sum: amount * priceProduct,
        sum: 32,
    }
    
];


// Отримання елемента, в який будуть виведені дані
const output = document.getElementById("main");

// Створення таблиці
const table = document.createElement("table");

// Створення заголовка таблиці
const headerRow = document.createElement("tr");
const headers = Object.keys(listProducts[0]);
headers.forEach(headerText => {
  const header = document.createElement("th");
  const textNode = document.createTextNode(headerText);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Додавання рядків таблиці зі значеннями об'єктів
listProducts.forEach(obj => {
  const row = document.createElement("tr");
  headers.forEach(header => {
    const cell = document.createElement("td");
    const textNode = document.createTextNode(obj[header]);
    cell.appendChild(textNode);
    row.appendChild(cell);
  });
  table.appendChild(row);
});

// Додавання таблиці до елемента на сторінці
output.appendChild(table);

function loglistProducts() {
  const notBought = listProducts.filter(listProducts => !listProducts.bought);
  const bought = listProducts.filter(listProducts => listProducts.bought);
  const arr = [...notBought, ...bought];
  console.log(arr);
}

function buy(name) {
 const foundlistProducts = listProducts.find(listProducts => listProducts.name ===name)
 if (!foundlistProducts) {
  return;
 } else  foundlistProducts.bought = true;

}





