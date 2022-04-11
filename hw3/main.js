//Задание 1.

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if ((i % 2) === 0) {
        console.log(`${i} - это четное число`);
    } else { console.log(`${i} - это нечетное число`); }
}

//Задание 2.

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

//Задание 3.

let arr2 = [];
for (let i = 0; i < 5; i++) {
    arr2[i] = Math.trunc(Math.random() * 10) ** 2;
    console.log(arr2[i]);
}

//Задание 4.
let arr3 = [];
for (let i = 0; i < 5; i++) {
    arr3[i] = Math.trunc(Math.random() * 10);  //есть ли разница между этим решением "arr3[i] =" и "arr3.push" ?
}
console.log(arr3);
console.log(arr3.filter(arr3 => arr3 !== 3));
console.log(arr3.map(arr3 => arr3 * 1.1));

//Задание 5.
function printNum(i) {
    console.log(i);
    return ++i;
}

for (let i = 0; i < 10; i = printNum(i)) {
    //тут пусто
}

//Задание 6.
let st = '';
for (let i = 0; i < 20; i++) {
    st += 'x';
    console.log(st);
}