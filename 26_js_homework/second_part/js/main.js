// 1 завдання
function checkPerf(parseInt) {
    parseInt = prompt("Введіть число", 6);
    let n=parseInt;
let sum = n-1;
let temp = n;
 
for(let i = 2; n>1;){
    if(!(n%i)){
        sum-=i;
        n=n/i;
    } else i++;
}
if(!sum)
    return `число ${temp} є досконалим`;
else
    return `число ${temp} не є досконалим`;
}
alert(checkPerf());
//2 завдання
function getDiapazon (start,end,step=1){
    let iterationCount=0;
    start = +prompt("Введіть перше число діапазону");
    end = +prompt("Введіть останнє число діапазону");
    for (let iret = start; iret <= end; iret += step){
        iterationCount+=step;
    }
    return checkPerf(iret);
}
alert (getDiapazon());
