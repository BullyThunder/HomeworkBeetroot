// 1 Завдання
let inputSumm = prompt ("Введіть суму вашого вкладу", 0);
let procent_Month = inputSumm * (0.05/12);
let first_Month = (procent_Month * inputSumm) + inputSumm;
let second_Month = (procent_Month * inputSumm) + first_Month;
let final_Summ = second_Month + inputSumm;
alert('Ваш рахунок через 2 месяці буде становити ' + final_Summ );

// 2 Завдання
