//1 завдання
/*(1 спосіб) function имя(параметры){
    тело функции
}
(2 спосіб)
let square = function(number);
*/
//2 завдання
function getArgument(par_1, par_2, par_3) {
    return arguments.length;
}
alert(getArgument(1,2));
//3 завдання
function getNumber(dab = +prompt("Введіть перше число"), bad = +prompt("Введіть друге число")){
    if(dab<bad){
        return -1;
    }
    else if(dab>bad){
        return 1;
    }
    else if (dab == bad){
        return 0;
    }
}
alert(getNumber());
//4 завдання
function calcfactroial(n = +prompt("Введіть число, факторіал якого буде обчислено"), result){
    result = result || 1;
    if (!n){
        return result;
    }
    else{
        return calcfactroial(n-1, result*n);
    }
}
alert(calcfactroial());
//5 завдання
function transformNum(input_k, input_m, input_a ) {
    input_k = prompt("Введіть перше число");
    input_m = prompt("Введіть друге число");
    input_a = prompt("Введіть третє число");
    return input_k + input_m + input_a;
}
alert(transformNum());
//6 завдання
function calcSquare(input_lenght, input_width, square){
    input_lenght = +prompt("Введіть довжину");
    input_width = +prompt("Введіть ширину");
    if (input_lenght == 0 || input_lenght == null){
        return square = input_width * input_width;
    }
     else if (input_width == 0 || input_width == null){
        return square = input_lenght * input_lenght;
        }
    else  {
            return square = input_lenght * input_width;
}
}
    alert(calcSquare());
    