//1 завдання
let a = 0.1, b = 0.2;
let c = (a + b)*10/10;
alert('Правильный ответ: ' + Math.floor(c * 10) / 10);
//2 завдання
let firstSymbol = "1";
let inputFirst = Number(firstSymbol);
let seconsSymbol = 2;
let result = inputFirst + seconsSymbol;
alert('Правильный ответ: ' + result);
//3 завдання
let number_GB = prompt("Введите кількіксть gb", 0);
const my_Const = 1024;
let number_MB = number_GB * my_Const;
let number_Files = number_MB/820;
alert('Файлів поміститься ' + number_Files.toFixed(1));