// 1 Завдання
let radius = prompt("Введіть радіус кола", 0);
const numberP = 3.14;
let square = numberP * radius * radius;
console.log("Площа круга дорівнює " + square);
// 2 Завдання
let distance = prompt("Які відстань між двома пунктами ", 0);
let time = prompt("За скільки годин вам потрібно добратися", 0);
let speed = distance / time;
console.log("Вам потрібно їхати зі швидкістю " + speed + " км/г");
// 3 Завдання
let usd = prompt("Введіть кількість долларів", 0);
const Exchange = 36.94;
let uah = usd * Exchange;
console.log("Ми дамо вам " + Math.round(uah * 100)/100 + " грн");