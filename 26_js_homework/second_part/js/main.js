//1 завдання
let inputNumber = +prompt("Введіть п'ятизначне число");
let b,c,e;
if (inputNumber >= 9999 && inputNumber <= 100000)
{
    b = inputNumber / 10000;
    inputNumber = inputNumber % 10000;
    c = inputNumber / 1000;
    inputNumber = inputNumber % 1000;
    inputNumber = inputNumber % 100;
    e = inputNumber / 10;
    inputNumber = inputNumber % 10;
    if (b == inputNumber && c == e){
        alert("Це паліндром");
    }
    else {
        alert("Це не паліндром");
    }
}
else{
    alert("Ви ввели невірне число");
}

//2 завдання
let inputPrice = +prompt("Введіть суму покупки");
let sale;
if (inputPrice >= 200 && inputPrice <= 300){
    sale = inputPrice - (inputPrice/100 *3);
    alert(`Сума до оплати: ${sale}`);
}
    else if (inputPrice >= 300 && inputPrice <= 500){
        sale = inputPrice - (inputPrice/100 *5);
    alert(`Сума до оплати: ${sale}`);
    }
    else if ( inputPrice > 500){
        sale = inputPrice - (inputPrice/100 *7);
    alert(`Сума до оплати: ${sale}`);
    }
    else{
        sale = inputPrice;
        alert(`Сума до оплати: ${sale}`);
    }

//4 завдання
const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currDay = 0;

while (confirm(`${days[currDay]}. Хотите увидеть следующий день?`)) {
  currDay = (currDay + 1) % days.length;
}
