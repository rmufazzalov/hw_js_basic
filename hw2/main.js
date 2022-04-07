//1 задание
let a = 1, b = 1, c, d;

/*
Операция префикс-инкремента (++a) возвращает значение уже измененной переменной, поэтому перменной "c" присваивается 2
 */
c = ++a;
console.log(c);

/*
Операция пост-инкремента(b++) возвращает значение переменной "b" до выполнения этого инкремента, то есть 1, а значение пеменной "b" будет равно 2
 */
d = b++;
console.log(d);

/*
Переменной "c" присваивается сумма двух чисел 2 и значение уже измененной переменной "а"(3), итог будет равен 5
 */
c = 2 + ++a;
console.log(c);

/*
Так же как и во втором примере, будет взято значение перменно "b" до инкрементирования, поэтому d = 4, b = 3
 */
d = 2 + b++;
console.log(d);

console.log(a);
console.log(b);


//2 задание
"use strict"; //Строгий режим

let a = 2;
let x = 1 + (a *= 2); // a = 4, x = 5

/*
a *= 2 аналогично a = a * 2 
 */
console.log(x);
console.log(a);

//3 задание
const a = Number(prompt("Введите число a"));
const b = Number(prompt("Введите число b"));

if ((a > 0) && (b > 0)) {
    console.log(a - b);
}
else if ((a < 0) && (b < 0)) {
    console.log(a * b);
}
else if ((a * b) < 0) {
    console.log(a + b);
}

//4 задание

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    if (a > b) {
        return a - b;
    } else if (a < b) {
        return b - a;
    } else return 0;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

//5 задание

function declinationOfNumber(count, one, two, five) {
    if (count === 1) {
        return one;
    }
    else if ((count > 1) && (count < 5)) {
        return two;
    }
    else {
        return five;
    }
}
