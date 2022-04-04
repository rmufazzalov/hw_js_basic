const num1 = prompt("Введите число: ");
let units = num1 % 10;
let dozens = parseInt(num1 % 100 / 10);
let hundreds = parseInt(num1 % 1000 / 100);

console.log(`В числе ${num1} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);

